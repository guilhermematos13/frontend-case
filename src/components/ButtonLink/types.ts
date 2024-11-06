import { AnchorHTMLAttributes, ReactNode } from "react"

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: ReactNode
	variant?: "button" | "textLink"
}

export type ButtonLinkStyledProps = {
	$variant: "button" | "textLink"
}
