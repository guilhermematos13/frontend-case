import { ToDoCardProps } from './types'
import * as S from './styles'
import { Button } from '../../../../components/Button'

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
        <S.ToDoCardTitleStyled>
          {item.title}
          <S.ToDoCardStatusStyled $status={item.status}>
            {item.status}
          </S.ToDoCardStatusStyled>
        </S.ToDoCardTitleStyled>
        <S.ToDoDescriptionContainer>
          {item.description}
        </S.ToDoDescriptionContainer>
        {item.links && item.links.length > 0 && (
          <S.ToDoLinksContainer>
            {item.links.map((link) => (
              <a key={link.name} target='_blank' href={link.url}>
                {link.name}
              </a>
            ))}
          </S.ToDoLinksContainer>
        )}
        <S.ToDoActionsContainer>
          <Button variant='small' onClick={handleDeleteTask}>
            Delete
          </Button>
          <Button variant='small' onClick={handleChangeTaskStatus}>
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
