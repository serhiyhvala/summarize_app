import { useActions } from '@hooks/useActions.ts'
import { FormEvent, useState } from 'react'
import { AiOutlineEnter } from 'react-icons/ai'

import styles from './inputField.module.scss'

const InputField = () => {
	const { updateInputField } = useActions()
	const [link, setLink] = useState('')
	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		updateInputField(link)
		setLink('')
	}
	return (
		<form className={styles.inputField} onSubmit={handleSubmitForm}>
			<input
				type='url'
				placeholder='Paste Your Link Here'
				value={link}
				onChange={e => setLink(e.target.value)}
			/>
			<button type='submit'>
				<AiOutlineEnter size={20} />
			</button>
		</form>
	)
}
export default InputField
