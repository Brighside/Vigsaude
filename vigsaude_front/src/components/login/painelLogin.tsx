"use client"
import { Input } from "../commons/input"
import "../../styles/components/login.css"
import { SubmitButton } from "../commons/SubmitButton"
import loginAction from "@/actions/loginAction"
import { useFormState } from "react-dom"

export const PainelLogin = () => {
	const [formState, formAction] = useFormState(loginAction, {
		message: "",
		status: "",
		error: []
	})

	return (
		<div className="loginConteiner">
			<div className="viglogoConteiner">
				<img src="/img/logo_vig.png" alt="Logo do Vigsaúde"/>
				<p>Aplicativo para a saúde pública</p>
			</div>
			<div className="inputConteiner">
				<form action={ formAction }>
					<div>{ formState?.message }</div>
					<Input status={formState?.status} type="text" name="user" placeholder="Nome de Usuário"/>
					<Input status={formState?.status} type="password" name="password" placeholder="Senha" />
					<div className="opcaoSenha">
						<div>
							<label htmlFor="manterLogado">
								<input type="checkbox"  name="keepLogged"/>
								Manter logado
							</label>
						</div>
						<a href="http://">Esqueci minha senha</a>
					</div>
					<SubmitButton text="Entrar" loadingText="autenticando" />
				</form>
			</div>
			<div className="logosConteiner">
				<a href="http://www.ensp.fiocruz.br/portal-ensp/departamento/csegsf" target="_blank" rel="noreferrer" >
					<img src="/img/logo_csegs.png" 
						alt="Logo do centro escola de saúde Germano Sinval Faria"/>
				</a>
				<a href="https://ensp.fiocruz.br/" target="_blank" rel="noreferrer" >
					<img src="/img/logo_ensp.png" 
						alt="Logo da escola nacional de saúde pública Sergio Arouca"/>
				</a>
				<a href="https://portal.fiocruz.br/" target="_blank" rel="noreferrer" >
					<img src="/img/logo_fiocruz.png" alt="Logo da Fiocruz"/>
				</a>
			</div>
		</div>
	)
}