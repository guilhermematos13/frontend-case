import { ButtonLink } from "../../components/ButtonLink"
import { ContainerStyled } from "../../components/Container/styles"
import { Header } from "../../components/Header"
import { AppRouterNamesEnum } from "../../constants"
import { headerData } from "./constants"

export const Home = () => {
	return (
		<ContainerStyled>
			<Header
				title={headerData.title}
				subtitle={headerData.subtitle}
				description={headerData.description}
				disclaimer={headerData.disclaimer}
			/>
			<div className="buttons">
				<ButtonLink
					aria-label="Navegação para página de listagem de tarefas"
					href={AppRouterNamesEnum.TODO}
				>
					TO-DO LIST
				</ButtonLink>
				<ButtonLink
					aria-label="Navegação para página de IBanking"
					href={AppRouterNamesEnum.IBANKING}
				>
					IBANKING
				</ButtonLink>
			</div>
		</ContainerStyled>
	)
}
