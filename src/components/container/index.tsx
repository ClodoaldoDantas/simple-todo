import { createElement, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface ContainerProps {
  children: ReactNode
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer'
}

export function Container({ children, as = 'div' }: ContainerProps) {
  return createElement(as, { className: styles.container }, children)
}
