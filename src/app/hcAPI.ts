import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../components/commons/interfaces';
import API, { HC_API_URL } from '../service/config';

export interface IProductFetchParams {
	q: string;
}

const hcAPI = createApi({
	reducerPath: 'hcAPI',
	baseQuery: fetchBaseQuery({ baseUrl: HC_API_URL }),
	keepUnusedDataFor: 30,
	tagTypes: [],
	endpoints: (builder) => ({
		getProducts: builder.mutation<IProduct[], IProductFetchParams>({
			query: (params) => ({ url: API.PRODUCT, params })
		})
	})
});

export const { useGetProductsMutation } = hcAPI;
export default hcAPI;
