import { z } from "zod"

export const loginSchema = z.object({
	username: z.string().min(1, {message: "Campo de usuário vazio!"}),
	password: z.string().min(8, {message: "A Senha precisa ter 8 caracteres no minimo!"})
})