import { SignOut } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { AppRouterNamesEnum } from '@routes/constants'
import { LogoutButtonStyled } from './styles'
import { LocalStorageNameEnum } from '@pages/IBanking/constants'
import { useStorage } from '@hooks/useStorage'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const { removeStorage } = useStorage()

  const handleLogoutButton = () => {
    removeStorage(LocalStorageNameEnum.TOKEN)
    navigate(AppRouterNamesEnum.IBANKING_LOGIN)
  }

  return (
    <LogoutButtonStyled onClick={handleLogoutButton} aria-label='Sair'>
      Sair
      <SignOut />
    </LogoutButtonStyled>
  )
}
