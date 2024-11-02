import { MainContainerStyled } from "./styles"
import { MainContainerProps } from "./types"

export const MainContainer = ({ children }: MainContainerProps) => {
	return <MainContainerStyled>{children}</MainContainerStyled>
}
