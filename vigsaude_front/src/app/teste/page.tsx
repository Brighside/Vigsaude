import { login } from "@/actions/login"
import { SubmitButton } from "@/components/commons/SubmitButton"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Vigsaude | teste",
}

export default function Teste () {

	const formStyle = {
		display: "grid",
		width: "300px",
		gap: "5px"
	}

	return(
		<form action={login} style={formStyle}>
			<input type="text" name="user"/>
			<input type="password" name="password"/>
			<SubmitButton text="Entrar" loadingText="Entrando"/>
		</form>
	)
}