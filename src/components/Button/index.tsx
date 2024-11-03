import { ButtonStyled } from "./styles"
import { ButtonProps } from "./types"

export const Button = ({
	children,
	variant = "normal",
	...props
}: ButtonProps) => {
	return (
		<ButtonStyled $variant={variant} {...props}>
			{children}
		</ButtonStyled>
	)
}
