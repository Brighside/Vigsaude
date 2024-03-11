import { PainelLogin } from "@/components/login/painelLogin"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Vigsaude | login",
}

export default function Login() {
	return(
		<div style={{display: "flex", alignItems: "flex-end", height: "100vh"}}>
			<PainelLogin />
		</div>
	)
}
