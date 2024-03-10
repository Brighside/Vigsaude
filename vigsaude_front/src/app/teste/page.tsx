import { SubmitButton } from "@/components/commons/SubmitButton"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Vigsaude | teste",
}

export default function Teste () {
	const test = async () => {
		"use server"

		const req = await fetch("https://vigsaude-back.vercel.app", 
			{
				method: "Post"
			})
		// const data = await req.json()

		console.log(req)
	}

	const formStyle = {
		display: "grid",
		width: "300px",
		gap: "5px"
	}

	return(
		<form action={test} style={formStyle}>
			<input type="text" name="Usuário"/>
			<input type="password" name="Senha"/>
			<SubmitButton text="Entrar" />
		</form>
	)
}