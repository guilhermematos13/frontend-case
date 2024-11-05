import { SignOut } from "@phosphor-icons/react"
import { LogoutButtonStyled } from "./styles"
import { useStorage } from "../../../../../hooks/useStorage"
import { LocalStorageNameEnum } from "../../../constants"
import { useNavigate } from "react-router-dom"
import { AppRouterNamesEnum } from "../../../../../routes/constants"

export const LogoutButton = () => {
	const navigate = useNavigate()
	const { removeStorage } = useStorage()

	const handleLogoutButton = () => {
		removeStorage(LocalStorageNameEnum.TOKEN)
		navigate(AppRouterNamesEnum.IBANKING_LOGIN)
	}

	return (
		<LogoutButtonStyled onClick={handleLogoutButton} aria-label="Sair">
			Sair
			<SignOut />
		</LogoutButtonStyled>
	)
}
