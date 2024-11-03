import { z } from "zod"

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const LoginFormSchema = z.object({
	userLogin: z
		.string({ message: "Campo obrigatório" })
		.min(1, { message: "Campo obrigatório" })
		.refine((value) => cpfRegex.test(value) || emailRegex.test(value), {
			message: "Formato inválido. Insira um CPF ou e-mail válido.",
		}),
	password: z
		.string({ message: "Campo obrigatório" })
		.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
})

export type LoginFormProps = z.infer<typeof LoginFormSchema>
