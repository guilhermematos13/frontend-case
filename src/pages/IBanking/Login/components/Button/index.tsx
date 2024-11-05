import { LoginButtonStyled } from "./styles"
import { LoginButtonProps } from "./types"
import { Loading } from "@components/Loading"

export const LoginButton = ({
	children,
	isLoading = false,
	...props
}: LoginButtonProps) => {
	return (
		<LoginButtonStyled {...props}>
			{isLoading ? <Loading /> : <>{children}</>}
		</LoginButtonStyled>
	)
}
