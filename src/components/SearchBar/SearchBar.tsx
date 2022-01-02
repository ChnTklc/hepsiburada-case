import classNames from 'classnames';
import { useState } from 'react';
import { useGetProductsMutation } from '../../app/hcAPI';
import searchIcon from '../../assets/image/searchIcon.svg';
import './SearchBar.scss';

export interface ISearchBarProps {
	className: string;
}

export default function SearchBar({ className }: ISearchBarProps) {
	const [searchValue, setSearchValue] = useState('');
	const [getProducts] = useGetProductsMutation();

	const onKeyPress = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter') {
			getProducts({ q: searchValue });
		}
	};

	return (
		<div className={classNames(['hc-search-bar', className])}>
			<img className='hc-search-bar__icon' src={searchIcon} alt='search' />
			<input
				className='hc-search-bar__input'
				placeholder='25 milyon’dan fazla ürün içerisinde ara'
				value={searchValue}
				onChange={({ target: { value } }) => setSearchValue(value)}
				onKeyPress={onKeyPress}
			/>
		</div>
	);
}
