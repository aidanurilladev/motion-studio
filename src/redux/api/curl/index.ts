import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<CURL.GetResponse, CURL.GetRequest>({
			query: () => ({
				url: '/',
				method: 'GET'
			}),
			providesTags: ['curl'],
		}),
		postLogin: build.mutation<CURL.PostLoginResponse, CURL.PostLoginRequest>({
			query: (data) => ({
				url: '/',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['curl']
		}),
		
	})
});
export const { useGetMeQuery, usePostLoginMutation} = api;
