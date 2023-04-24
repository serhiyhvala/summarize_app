import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const inputFieldSlice = createSlice({
	name: 'inputFieldSlice',
	initialState: { inputField: '' },
	reducers: {
		updateInputField: (state, action: PayloadAction<string>) => {
			state.inputField = action.payload
		}
	}
})

export const { reducer, actions } = inputFieldSlice
