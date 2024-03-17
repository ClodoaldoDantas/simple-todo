import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

function DropdownRoot({ children }: { children: ReactNode }) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>
}

function DropdownTrigger({ children }: { children: ReactNode }) {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
}

function DropdownContent({ children }: { children: ReactNode }) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        side="bottom"
        className={styles.dropdownMenuContent}
        sideOffset={5}
      >
        {children}
        <DropdownMenu.Arrow className={styles.dropdownMenuArrow} />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}

function DropdownItem({
  children,
  onSelect,
  className,
}: {
  children: ReactNode
  onSelect: () => void
  className?: string
}) {
  return (
    <DropdownMenu.Item className={className} onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  )
}

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
}
