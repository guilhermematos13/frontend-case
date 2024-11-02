import logoImage from "../../assets/logo.svg"
import { MainContainer } from "../../components/MainContainer"
import { AppRouterNamesEnum } from "../../constants"
import * as S from "./styles"

export const Home = () => {
	return (
		<MainContainer>
			<div>
				<S.ImageStyled src={logoImage} alt="Cora" title="Cora" />
				<S.TitleStyled>Hey There &#128075;</S.TitleStyled>
				<S.SubtitleStyled>Tenha um ótimo teste!!!</S.SubtitleStyled>
				<S.ParagraphStyled>
					<strong>Vamos começar?</strong> Como você faria os botões abaixo
					abrirem as suas respectivas páginas? (Comece pela{" "}
					<strong>TODO LIST</strong>, pois nela contem os próximos passos)
				</S.ParagraphStyled>
				<S.ParagraphDisclaimerStyled>
					&#9888; Você pode encontrar alguns <strong>erros</strong> no meio do
					caminho, não desanime e fique atento para conseguir{" "}
					<strong>visualizar</strong> e <strong>renderizar</strong> as páginas.
				</S.ParagraphDisclaimerStyled>
				<S.ContainerButtonsStyled>
					<S.AnchorButtonStyled href={AppRouterNamesEnum.TODO}>
						TO-DO LIST
					</S.AnchorButtonStyled>
					<S.AnchorButtonStyled href={AppRouterNamesEnum.IBANKING}>
						IBANKING
					</S.AnchorButtonStyled>
				</S.ContainerButtonsStyled>
			</div>
		</MainContainer>
	)
}
