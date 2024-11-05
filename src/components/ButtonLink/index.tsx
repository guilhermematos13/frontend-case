import { ButtonLinkStyled } from "./styles"
import { ButtonLinkProps } from "./types"

export const ButtonLink = ({
	variant = "button",
	children,
	...props
}: ButtonLinkProps) => {
	return (
		<ButtonLinkStyled $variant={variant} {...props}>
			{children}
		</ButtonLinkStyled>
	)
}
