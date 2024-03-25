import createAcountAction from "@/actions/createACountAction"
import { SubmitButton } from "@/components/commons/SubmitButton"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Vigsaude | Nova conta",
}


export default function Teste () {
	const formStyle = {
		display: "grid",
		width: "300px",
		gap: "5px",
	}

	return(
		<div style={{display: "flex", alignItems: "center", width: "100vw" , height: "100vh" , justifyContent: "center"}}>
			<form action={createAcountAction} style={formStyle}>
				<input type="text" name="user" placeholder="user"/>
				<input type="text" name="email" placeholder="email"/>
				<input type="password" name="password" placeholder="senha"/>
				<SubmitButton text="Criar conta" loadingText="criando"/>
			</form>
		</div>
		
	)
}