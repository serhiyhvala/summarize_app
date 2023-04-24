import { bindActionCreators } from '@reduxjs/toolkit'
import { actions } from '@store/inputField/inputField.slice.ts'
import { useMemo } from 'react'

import { useAppDispatch } from './useAppDispatch'

const rootActions = {
	...actions
}

export const useActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
