import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { IProduct } from '../commons/interfaces';
import Basket from './Basket';
import { addItem, removeItem } from './basketSlice';

test('test basket on hover state', async () => {
	render(
		<Provider store={store}>
			<Basket />
		</Provider>
	);

	// hover on basket button
	fireEvent.mouseOver(screen.getByRole('BasketButton'));

	const basketList = screen.queryByRole('BasketList');

	if (localStorage.getItem('basketItems')) {
		expect(basketList).toBeInTheDocument();
	} else {
		expect(basketList).not.toBeInTheDocument();
	}
});

test('test basket on mouse leave', async () => {
	render(
		<Provider store={store}>
			<Basket />
		</Provider>
	);

	// hover on basket button
	fireEvent.mouseLeave(screen.getByRole('BasketButton'));

	const basketList = screen.queryByRole('BasketList');

	expect(basketList).not.toBeInTheDocument();
});

test('test basket items count existence', async () => {
	render(
		<Provider store={store}>
			<Basket />
		</Provider>
	);

	const basketItemsCount = screen.queryByRole('BasketItemsCount');
	const basketItems = localStorage.getItem('basketItems');

	if (basketItems) {
		expect(basketItemsCount).toBeInTheDocument();
	} else {
		expect(basketItemsCount).not.toBeInTheDocument();
	}
});

test('add item to basket', () => {
	render(
		<Provider store={store}>
			<Basket />
		</Provider>
	);

	store.dispatch(
		addItem({
			id: 34,
			title: 'iPhone 11 Beyaz Cep Telefonu',
			brand: 'Apple',
			model: 'iPhone 11',
			color: 'Beyaz',
			createdDate: '2022-01-04T13:56:07.190Z',
			price: 10999,
			discount: 7,
			imageURL: 'https://productimages.hepsiburada.net/s/49/550/10986387046450.jpg/format:webp'
		} as IProduct)
	);

	const basketItemsCount = screen.queryByRole('BasketItemsCount');

	expect(basketItemsCount).toHaveTextContent('1');
});

test('remove item to basket', () => {
	render(
		<Provider store={store}>
			<Basket />
		</Provider>
	);

	store.dispatch(
		addItem({
			id: 34,
			title: 'iPhone 11 Beyaz Cep Telefonu',
			brand: 'Apple',
			model: 'iPhone 11',
			color: 'Beyaz',
			createdDate: '2022-01-04T13:56:07.190Z',
			price: 10999,
			discount: 7,
			imageURL: 'https://productimages.hepsiburada.net/s/49/550/10986387046450.jpg/format:webp'
		} as IProduct)
	);

	store.dispatch(removeItem(34));

	const basketItemsCount = screen.queryByRole('BasketItemsCount');

	expect(basketItemsCount).not.toBeInTheDocument();
});
