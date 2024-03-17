import { z } from "zod"

export const createAcountSchema = z.object({
	username: z.string().min(1, {message: "Campo de usuário vazio!"}),
	email: z.string().email({ message: "Endereço de Email inválido!" }),
	password: z.string().min(8, {message: "A Senha precisa ter 8 caracteres no minimo!"}),
})