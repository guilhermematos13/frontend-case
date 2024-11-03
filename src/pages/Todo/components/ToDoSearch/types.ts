import { ChangeEvent, FormEvent } from 'react'

export type ToDoSearchProps = {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void
  search: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleClearInput: () => void
}

export type ButtonIconStyledProps = {
  $isVisible: boolean
}
