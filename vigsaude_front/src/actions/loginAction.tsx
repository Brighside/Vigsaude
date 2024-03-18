"use server"
import authService from "@/services/auth-service"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import { loginSchema } from "@/schemas/loginSchema"

async function loginAction(prevState: any, formdata: FormData) {
	
	const validateForm = loginSchema.safeParse({
		username: formdata.get("user"),
		password: formdata.get("password")
	})

	if(!validateForm.success) {
		console.log(validateForm.error.errors)
		return {
			message: "Erro no campos",
			status: "error",
			error: validateForm.error.errors
		}
	}

	// const passwordHash = await bcrypt.hash(validateForm.data.password, 10)
	// const userInfo = {
	// 	username: validateForm.data.username,
	// 	email: "aaaaaa@a.c",
	// 	password: passwordHash,
	// 	keepLogged: formdata.get("keepLogged")
	// }

	// await fetch("https://vigsaude-back.vercel.app/", {
	// 	method: "POST",
	// 	body: JSON.stringify(userInfo)
	// })
	// 	.then(async (req) => {
	// 		if (req.status == 200) {
	// 			const data = await req.json()
	// 			const payloadjwt = {
	// 				data: data,
	// 				keepLogged: userInfo.keepLogged,
	// 				username: userInfo.username
	// 			}
	// 			authService.createSessionToken(payloadjwt)
	// 			redirect("/")
	// 		}
	// 	})

	return {
		message: "passou"
	}
}

export default loginAction