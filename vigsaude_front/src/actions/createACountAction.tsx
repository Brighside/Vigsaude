import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import { createAcountSchema } from "@/schemas/createAcountSchema"

async function createAcountAction (formdata: FormData) {
	"use server"
	// const validateForm = createAcountSchema.safeParse({
	// 	username: formdata.get("user"),
	// 	email: formdata.get("email"),
	// 	password: formdata.get("password")
	// })

	// if(!validateForm.success) {
	// 	return console.log(validateForm.error.errors)
	// }
	const senha = formdata.get("password")

	const passwordHash = await bcrypt.hash(senha as string /*validateForm.data.password*/, 10)
	const userInfo = {
		username: formdata.get("user") /*validateForm.data.username*/,
		email: formdata.get("email") /*validateForm.data.email*/,
		password: passwordHash
	}

	await fetch("http://127.0.0.1:8000/", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})
		.then( async (req) => {
			console.log(req)
			const data = await req.json()
			console.log(data)
			// if (req.status == 200) {
			// 	const data = await req.json()
			// 	console.log(data)
			// 	// redirect("/login")
			// }
		})
}

export default createAcountAction