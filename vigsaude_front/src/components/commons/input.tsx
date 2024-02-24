import "../../styles/components/commons/input.css"
type props = {
	type:  string,
	placeholder: string
}

export const Input = (props: props) => {
	return (
		<input type={props.type} placeholder={props.placeholder}/>
	)
}

