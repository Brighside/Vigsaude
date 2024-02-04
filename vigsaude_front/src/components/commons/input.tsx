import "../../styles/components/commons/input.css"

export const Input = (props: any) => {
    return (
        <input type={props.type} placeholder={props.placeholder}/>
    )
}

