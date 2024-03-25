"use server"
import authService from "@/services/auth-service"
import bcrypt from "bcryptjs"
import { loginSchema } from "@/schemas/loginSchema"
import { redirect } from "next/navigation"

type formState = {
	message?: string
	status?: string
	formErrors?: string[]
	fieldErrors?: object
}

async function loginAction(prevState: formState, formdata: FormData){
	
	const validateForm = loginSchema.safeParse({
		username: formdata.get("user"),
		password: formdata.get("password")
	})

	if(!validateForm.success) {
		return {
			message: "campos inválidos",
			status: "error",
			formErrors: validateForm.error.flatten().formErrors,
			fieldErrors: validateForm.error.flatten().fieldErrors
		}
	}

	const passwordHash = await bcrypt.hash(validateForm.data.password, 10)
	const userInfo = {
		username: validateForm.data.username,
		password: passwordHash,
		keepLogged: formdata.get("keepLogged")
	}

	await fetch("https://vigsaude-back.vercel.app/", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})
		.then(async (req) => {
			if (req.status == 200) {
				const data = await req.json()
				const payloadjwt = {
					data: data,
					keepLogged: userInfo.keepLogged,
					username: userInfo.username
				}
				authService.createSessionToken(payloadjwt)
				redirect("/")
			}
		})
	
	return {status: "failed"}

}

export default loginAction