import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from '@services/articleApi.ts'
import { reducer } from '@store/inputField/inputField.slice.ts'

export const store = configureStore({
	reducer: {
		inputField: reducer,
		[articleApi.reducerPath]: articleApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(articleApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
