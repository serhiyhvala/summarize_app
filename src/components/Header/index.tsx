import Button from '@ui/Button'

import styles from './header.module.scss'

const Header = () => {
	return (
		<header>
			<div className={styles.logo}>AI Summarize</div>
			<Button>
				<a href='https://github.com/serhiyhvala/summarize_app' target='_blank'>
					Github
				</a>
			</Button>
		</header>
	)
}

export default Header
