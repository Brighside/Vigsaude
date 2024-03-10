import "../../styles/components/commons/input.css"
interface Props {
	type:  string
	placeholder: string
}

export const Input = (props: Props) => {
	return (
		<input type={props.type} placeholder={props.placeholder}/>
	)
}

