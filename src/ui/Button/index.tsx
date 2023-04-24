import { FC, ReactNode } from 'react'

import styles from './button.module.scss'

type ButtonProps = {
	children: ReactNode
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
