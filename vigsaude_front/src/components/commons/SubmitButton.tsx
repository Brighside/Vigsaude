"use client"
import "../../styles/components/commons/submitButton.css"
import { useFormStatus } from "react-dom"

interface Props {
    text: string,
	loadingText: string
}

export const SubmitButton = ({text, loadingText}: Props) => {
	const { pending } = useFormStatus()

	return (
		<button className="submitButton" type="submit" aria-disabled={pending}>
			{ pending ? loadingText + "..." : text }
		</button>
	)
}
