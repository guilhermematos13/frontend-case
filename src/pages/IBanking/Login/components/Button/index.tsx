import { LoginButtonStyled } from "./styles"
import { ButtonProps } from "./types"

export const LoginButton = ({ children, ...props }: ButtonProps) => {
	return <LoginButtonStyled {...props}>{children}</LoginButtonStyled>
}
