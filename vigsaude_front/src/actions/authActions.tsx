import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import { z } from "zod"
// import authService from "@/services/auth-service"

const  createAcountSchema = z.object({
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

	await fetch("http://127.0.0.1:8000", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})
		.then( (req) => {
			if (req.status == 200) {
				console.log(userInfo)
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
		password: passwordHash,
		keepLogged: formdata.get("keepLogged")
	}

	const req = await fetch("http://127.0.0.1:8000", {
		method: "POST",
		body: JSON.stringify(userInfo)
	})

	console.log(req.status)
	const data = await req.json()
	console.log(data)
	// authService.createSessionToken(userInfo)
}

const authActions = {
	createAcount,
	login
}

export default authActions