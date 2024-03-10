"use client"
import "../../styles/components/commons/submitButton.css"
import { useFormStatus } from "react-dom"

interface Props {
    text: string
}

export const SubmitButton = ({text}: Props) => {
	const { pending } = useFormStatus()

	return (
		<button className="submitButton" type="submit" aria-disabled={pending}>
			{ pending ? text + "..." : text }
		</button>
	)
}
