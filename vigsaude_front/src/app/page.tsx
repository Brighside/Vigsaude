import { PainelLogin } from "@/components/login/painelLogin"
import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Vigsaude",
}

export default function Home() {
	return (
		<div> 
			<PainelLogin />
		</div>
	)
}
