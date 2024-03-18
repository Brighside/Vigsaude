import "../../styles/components/commons/input.css"
interface Props {
	type:  string
	placeholder: string
	name:  string
	status: undefined | string
}

export const Input = ({type, placeholder, name, status}: Props) => {
	return (
		<input className={status} name={name} type={type} placeholder={placeholder}/>
	)
}

