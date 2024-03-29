import { Goal } from 'lucide-react'

import styles from './styles.module.scss'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <Goal size={48} />
      <strong>Tudo em dia</strong>
      <p>Sua lista de tarefas está limpa e pronta para novos desafios!</p>
    </div>
  )
}
