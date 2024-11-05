import { ToDoCardProps } from './types'
import * as S from './styles'
import { Button } from '@components/Button'
import { ButtonLink } from '@components/ButtonLink'

export const ToDoCard = ({
  item,
  handleChangeTaskStatus,
  handleDeleteTask,
}: ToDoCardProps) => {
  return (
    <>
      <S.ToDoReferenceContainerStyled>
        {item.ref}
        {item.required ? '*' : ''}.
      </S.ToDoReferenceContainerStyled>
      <S.ToDoContentStyled>
        <S.TitleAndStatusContainer>
          <S.ToDoCardTitleStyled>{item.title}</S.ToDoCardTitleStyled>
          <S.ToDoCardStatusStyled $status={item.status}>
            {item.status}
          </S.ToDoCardStatusStyled>
        </S.TitleAndStatusContainer>
        <S.ToDoDescriptionContainer>
          {item.description}
        </S.ToDoDescriptionContainer>
        {item.links && item.links.length > 0 && (
          <S.ToDoLinksContainer>
            {item.links.map((link) => (
              <ButtonLink
                variant='textLink'
                key={link.name}
                target='_blank'
                href={link.url}
              >
                {link.name}
              </ButtonLink>
            ))}
          </S.ToDoLinksContainer>
        )}
        <S.ToDoActionsContainer>
          <Button
            aria-label='Botão para deletar a task.'
            variant='small'
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
          <Button
            aria-label={`Botão para mudar o status da task para ${item.status === 'done' ? 'PENDING' : 'DONE'}`}
            variant='small'
            onClick={handleChangeTaskStatus}
          >
            Change to{' '}
            <strong>
              <u>{item.status === 'done' ? 'PENDING' : 'DONE'}</u>
            </strong>
          </Button>
        </S.ToDoActionsContainer>
      </S.ToDoContentStyled>
    </>
  )
}
