import { useState } from 'react'
import { FilterButtonsProps } from './types'
import { FilterButton, FilterButtonContainerStyled } from './styles'

export const FilterButtons = ({ onSelect, options }: FilterButtonsProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleOptionChange = (value: string) => {
    if (selectedValue === value) {
      setSelectedValue(null)
      onSelect('')
    } else {
      setSelectedValue(value)
      onSelect(value)
    }
  }

  return (
    <FilterButtonContainerStyled>
      {options.map((option) => (
        <FilterButton
          aria-label={`Seleciona o botão com a opção ${option.label}`}
          key={option.value}
          $selected={selectedValue === option.value}
          onClick={() => handleOptionChange(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterButtonContainerStyled>
  )
}
