import SubmitButton from "./SubmitButton"
import { testeForm } from "./testeForm"

export default function Teste() {
	return (
		<> 
			<form action={testeForm}>
				<input type="text" placeholder="usuario" name="usuario"/>
				<input type="text" placeholder="senha" name="senha"/>
				<SubmitButton text="Enviar"/>
			</form>
			
		</>
	)
}