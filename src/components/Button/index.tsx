import { ButtonStyled } from "./styles"
import { ButtonProps } from "./types"

export const Button = ({
	children,
	variant = "normal",
	...props
}: ButtonProps) => (
	<ButtonStyled $variant={variant} {...props}>
		{children}
	</ButtonStyled>
)
