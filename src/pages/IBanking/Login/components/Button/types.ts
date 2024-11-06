import { ButtonHTMLAttributes, ReactNode } from "react"

export type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
	isLoading?: boolean
}
