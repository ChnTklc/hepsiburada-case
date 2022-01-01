import { useEffect } from 'react';
import { useGetProductsMutation } from '../../app/hcAPI';
import './Main.scss';

export default function Main() {
	const [getProducts, { data, isLoading }] = useGetProductsMutation();

	useEffect(() => {
		getProducts({ q: 'asa' });
	}, [getProducts]);

	console.log({ data, isLoading });

	return <div />;
}
