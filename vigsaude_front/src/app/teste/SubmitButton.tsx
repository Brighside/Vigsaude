"use client"

import {  useFormStatus } from "react-dom"

interface Props {
    text: string
}

export default function SubmitButton ({ text }: Props) {
	const { pending } = useFormStatus() 

	return (
		<button type="submit" aria-disabled={pending}>{text}</button>
	)
}