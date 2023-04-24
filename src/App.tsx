import Hero from '@components/Hero'
import styles from '@styles/app.module.scss'

const App = () => {
	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Hero />
			</div>
		</div>
	)
}

export default App
