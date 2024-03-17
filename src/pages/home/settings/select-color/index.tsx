import { CheckIcon } from 'lucide-react'

import { Dropdown } from '../../../../components/dropdown'
import styles from './styles.module.scss'

interface ColorType {
  name: string
  color: string
}

const colors: ColorType[] = [
  { name: 'Slate', color: '#94a3b8' },
  { name: 'Gray', color: '#9ca3af' },
  { name: 'Red', color: '#f87171' },
  { name: 'Orange', color: '#fb923c' },
  { name: 'Yellow', color: '#facc15' },
  { name: 'Green', color: '#4ade80' },
  { name: 'Emerald', color: '#34d399' },
  { name: 'Teal', color: '#2dd4bf' },
  { name: 'Sky', color: '#38bdf8' },
  { name: 'Blue', color: '#60a5fa' },
  { name: 'Indigo', color: '#818cf8' },
  { name: 'Violet', color: '#a78bfa' },
  { name: 'Purple', color: '#c084fc' },
  { name: 'Fuchsia', color: '#e879f9' },
  { name: 'Pink', color: '#f472b6' },
  { name: 'Rose', color: '#fb7185' },
]

interface SelectColorProps {
  currentColor: string
  onSelectColor: (color: string) => void
}

export function SelectColor({ currentColor, onSelectColor }: SelectColorProps) {
  return (
    <>
      {colors.map(item => (
        <Dropdown.Item
          key={item.name}
          className={styles.menuItem}
          onSelect={() => onSelectColor(item.color)}
        >
          <div
            className={styles.menuItemColor}
            style={{ backgroundColor: item.color }}
          />

          {item.name}

          {currentColor === item.color && (
            <CheckIcon style={{ marginLeft: 'auto' }} size={18} />
          )}
        </Dropdown.Item>
      ))}
    </>
  )
}
