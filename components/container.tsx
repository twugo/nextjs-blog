import styles from '../styles/Home.module.css'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
