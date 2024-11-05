import { format, parseISO } from 'date-fns'
import { Locale } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDateWithCapitalizedMonth = (
  date: string,
  locale: Locale = ptBR,
): string => {
  const dateISO = parseISO(date)
  const formattedDate = format(dateISO, "dd 'de' MMMM", { locale })

  const parts = formattedDate.split(' ')
  if (parts.length > 2) {
    parts[2] = parts[2].charAt(0).toUpperCase() + parts[2].slice(1)
  }

  return parts.join(' ')
}

export const formatISODate = (
  isoDate: string,
  locale: Locale = ptBR,
): string => {
  const date = parseISO(isoDate)
  const formattedDate = format(date, 'dd MMM yyyy - HH:mm', { locale })

  const parts = formattedDate.split(' ')
  if (parts.length > 1) {
    parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
  }

  return parts.join(' ')
}
