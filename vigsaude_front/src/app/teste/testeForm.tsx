import { redirect } from "next/navigation"

export async function testeForm(formdata: FormData) {
	"use server"
	const usuario = formdata.get("usuario")
	const senha = formdata.get("senha")

	const res = await fetch("https://vigsaude-back.vercel.app", {
		method: "POST",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ usuario, senha})
	})

	const data = await res.json()

	redirect(`/${"?usuario="+data.usuario+"?senha="+data.senha}`)
}