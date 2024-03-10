import { SubmitButton } from "@/components/commons/SubmitButton"

export default function Teste () {
	const test = async () => {
		"use server"
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