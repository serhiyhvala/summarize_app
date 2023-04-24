import Header from '@components/Header'

import styles from './hero.module.scss'

const Hero = () => {
	return (
		<>
			<Header />
			<section className={styles.hero}>
				<h1 className={styles.text}>
					Summarize Articles with <br />
					<span>OpenAI GPT-4</span>
				</h1>
				<h2 className={styles.desc}>
					Simplify your readings with AI powered Technology
				</h2>
			</section>
		</>
	)
}

export default Hero
