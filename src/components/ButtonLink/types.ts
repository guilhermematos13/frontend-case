import { AnchorHTMLAttributes, ReactNode } from 'react'

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}
