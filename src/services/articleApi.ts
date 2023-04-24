import { BASE_URL } from '@constants/*'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IGetSummary {
	summary: string
}

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST

export const articleApi = createApi({
	reducerPath: 'getSummarizeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: headers => {
			headers.set('X-RapidAPI-Key', rapidApiKey)
			headers.set('X-RapidAPI-Host', rapidApiHost)
			return headers
		}
	}),
	endpoints: build => ({
		getSummarize: build.query<IGetSummary, string>({
			query: link => `/summarize?url=${encodeURIComponent(link)}&length=3`
		})
	})
})

export const { useGetSummarizeQuery } = articleApi
