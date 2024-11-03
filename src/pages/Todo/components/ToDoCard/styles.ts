import styled from 'styled-components'
import { ToDoCardStyledProps } from './types'

export const ToDoContentStyled = styled.div`
  flex: 1;
  text-align: left;
`
export const ToDoReferenceContainerStyled = styled.span``

export const ToDoCardTitleStyled = styled.h3`
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 10px;
`

export const ToDoCardStatusStyled = styled.span<ToDoCardStyledProps>`
  transform: translateY(-3px);
  font-size: 0.5em;
  line-height: 1em;
  margin-left: 5px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  text-transform: uppercase;
  color: ${({ theme, $status }) =>
    $status === 'done' ? theme.colors.success : theme.colors.error};
  border-color: ${({ theme, $status }) =>
    $status === 'done' ? theme.colors.success : theme.colors.error};
`

export const ToDoDescriptionContainer = styled.div`
  transform: translateY(-3px);
  font-size: 0.5em;
  font-size: 1.6em;
  line-height: 1.3em;
  color: ${({ theme }) => theme.colors.gray};
`

export const ToDoLinksContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`

export const ToDoActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.xxs};
  margin-top: ${({ theme }) => theme.size.sm};
`
