import "../../styles/components/commons/input.css"

interface Props {
	type:  string
	placeholder: string
	name:  string
	status?: string
	messageError?: string | string[]
}

export const Input = ({type, placeholder, name, status, messageError}: Props) => {
	return (
		<>
			<input className={status} name={name} type={type} placeholder={placeholder}/>
			<div className="messageError">{messageError}</div>
		</>
		
	)
}

