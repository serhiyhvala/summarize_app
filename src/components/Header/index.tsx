import styles from './header.module.scss'

const Header = () => {
	return (
		<header>
			<div className={styles.logo}>AI Summarize</div>
			<div className={styles.button}>
				<a href='https://github.com/' target='_blank'>
					Github
				</a>
			</div>
		</header>
	)
}

export default Header
