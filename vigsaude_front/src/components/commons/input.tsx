import "../../styles/components/commons/input.css"
interface Props {
	type:  string
	placeholder: string
	name:  string
}

export const Input = ({type, placeholder, name}: Props) => {
	return (
		<input name={name} type={type} placeholder={placeholder}/>
	)
}

