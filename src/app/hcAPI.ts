import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, TSort } from '../components/commons/interfaces';
import API, { HC_API_URL } from '../service/config';

type TKeyValue = { [key: string]: number };

export interface IMeta extends IProductFetchParams {
	itemsPerPage?: number;
	colors: TKeyValue;
	brands: TKeyValue;
	total: number;
}

export interface IProductFetchParams {
	q?: string;
	page?: number;
	color?: string;
	brand?: string;
	sort?: TSort;
}

export interface IGetProductsResponse {
	data: IProduct[];
	meta: IMeta;
}

const hcAPI = createApi({
	reducerPath: 'hcAPI',
	baseQuery: fetchBaseQuery({ baseUrl: HC_API_URL }),
	keepUnusedDataFor: 30,
	tagTypes: [],
	endpoints: (builder) => ({
		getProducts: builder.mutation<IGetProductsResponse, IProductFetchParams | undefined>({
			query: (params) => ({ url: API.PRODUCT, params })
		})
	})
});

export const { useGetProductsMutation } = hcAPI;
export default hcAPI;
