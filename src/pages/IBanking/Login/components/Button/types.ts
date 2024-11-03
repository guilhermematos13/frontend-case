import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
	as?: string
	variant?: "small" | "normal"
}
