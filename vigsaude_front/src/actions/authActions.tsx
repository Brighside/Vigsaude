import authService from "@/services/auth-service"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import { z } from "zod"
// import authService from "@/services/auth-service"

const createAcountSchema = z.object({
	username: z.string().min(1, {message: "Campo de usuário vazio!"}),
	email: z.string().email({ message: "Endereço de Email inválido!" }),
	password: z.string().min(8, {message: "A Senha precisa ter 8 caracteres no minimo!"}),
})

const loginSchema = z.object({
	username: z.string().min(1, {message: "Campo de usuário vazio!"}),
	password: z.string().min(8, {message: "A Senha precisa ter 8 caracteres no minimo!"})
})

async function createAcount(formdata: FormData) {
	"use server"

	const validateForm = createAcountSchema.safeParse({
		username: formdata.get("user"),
		email: formdata.get("email"),
		password: formdata.get("password")
	})

	if(!validateForm.success) {
		return console.log(validateForm.error.errors)
	}

	const passwordHash = await bcrypt.hash(validateForm.data.password, 10)
	const userInfo = {
		username: validateForm.data.username,
		email: validateForm.data.email,
		password: passwordHash
	}

	await fetch("https://vigsaude-back.vercel.app/", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})
		.then( async (req) => {
			if (req.status == 200) {
				const data = await req.json()
				console.log(data)
				redirect("/login")
			}
		})

}


async function login(formdata: FormData) {
	"use server"

	const validateForm = loginSchema.safeParse({
		username: formdata.get("user"),
		password: formdata.get("password")
	})

	if(!validateForm.success) {
		return console.log(validateForm.error.errors)
	}

	const passwordHash = await bcrypt.hash(validateForm.data.password, 10)
	const userInfo = {
		username: validateForm.data.username,
		email: "aaaaaa@a.c",
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
}

const authActions = {
	createAcount,
	login
}

export default authActions