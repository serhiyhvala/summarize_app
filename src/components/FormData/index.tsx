import InputField from '@components/InputField'
import { useAppSelector } from '@hooks/useAppSelector.ts'
import useCopyToClipboard from '@hooks/useCopyToClipboard.ts'
import { useGetSummarizeQuery } from '@services/articleApi.ts'
import Button from '@ui/Button'

import styles from './formData.module.scss'

const FormData = () => {
	const { inputField } = useAppSelector(state => state.inputField)
	const { data, isFetching, isError } = useGetSummarizeQuery(inputField, {
		skip: inputField.length === 0
	})
	const [value, copy] = useCopyToClipboard()
	const isCopied = value ? 'Copied!' : 'Copy'

	return (
		<section className={styles.formData}>
			<InputField />
			{isFetching ? (
				<h2 className={styles.state}>Loading...</h2>
			) : isError ? (
				<h2 className={styles.state}>Something went wrong</h2>
			) : (
				data?.summary && (
					<>
						<h2 className={styles.article}>
							Article <span>Summary</span>
						</h2>
						<Button onClick={() => copy(data.summary)}>{isCopied}</Button>
						<div className={styles.summary}>{data.summary}</div>
					</>
				)
			)}
		</section>
	)
}

export default FormData
