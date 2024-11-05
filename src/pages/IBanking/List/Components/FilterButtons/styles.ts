import styled from 'styled-components'
import { FilterButtonStyledProps } from './types'

export const FilterButtonContainerStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.sm};
`

export const FilterButton = styled.button<FilterButtonStyledProps>`
  padding: ${({ theme }) => theme.size.xxxs} 0.625rem;
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.darkGray : theme.colors.lighterGray};
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.lighterGray : theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.size.lg};
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
`
