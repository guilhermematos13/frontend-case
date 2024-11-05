import { IListResponse } from '../api/List/types'

export const calculateDailyBalance = (
  transactions: IListResponse['results'],
  targetDate: string,
): number => {
  let balance = 0

  transactions.forEach((transaction) => {
    if (transaction.date === targetDate) {
      transaction.items.forEach((item) => {
        if (item.entry === 'CREDIT') {
          balance += item.amount
        } else if (item.entry === 'DEBIT') {
          balance -= item.amount
        }
      })
    }
  })

  return balance
}
