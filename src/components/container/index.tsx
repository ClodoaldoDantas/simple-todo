import classNames from 'classnames'
import { createElement, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer'
}

export function Container({ children, className, as = 'div' }: ContainerProps) {
  return createElement(
    as,
    { className: classNames(styles.container, className) },
    children,
  )
}
