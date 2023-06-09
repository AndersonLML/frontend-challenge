import styles from './page.module.css'
import { FilterBar } from '../components/filter-bar';
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  )
}
