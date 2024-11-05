import logoImage from '@assets/logo.svg'
import { HeaderContainerStyled } from './styles'
import { HeaderProps } from './types'

export const Header = ({
  title,
  subtitle,
  disclaimer,
  description,
}: HeaderProps) => {
  return (
    <HeaderContainerStyled>
      <img src={logoImage} alt='Cora' title='Cora' />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <p className='disclaimer'>{disclaimer}</p>
    </HeaderContainerStyled>
  )
}
