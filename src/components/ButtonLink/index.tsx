import { ButtonLinkStyled } from './styles'
import { ButtonLinkProps } from './types'

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return <ButtonLinkStyled {...props}>{children}</ButtonLinkStyled>
}
