import { ContainerStyled } from '@components/Container/styles'
import { headerData } from './constants'
import { Header } from '@components/Header'
import { ButtonLink } from '@components/ButtonLink'
import { AppRouterNamesEnum } from '@routes/constants'

export const Home = () => {
  return (
    <ContainerStyled>
      <Header
        title={headerData.title}
        subtitle={headerData.subtitle}
        description={headerData.description}
        disclaimer={headerData.disclaimer}
      />
      <div className='buttons'>
        <ButtonLink
          aria-label='Navegação para página de listagem de tarefas'
          href={AppRouterNamesEnum.TODO}
        >
          TO-DO LIST
        </ButtonLink>
        <ButtonLink
          aria-label='Navegação para página de IBanking'
          href={AppRouterNamesEnum.IBANKING_LOGIN}
        >
          IBANKING
        </ButtonLink>
      </div>
    </ContainerStyled>
  )
}
