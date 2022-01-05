import classNames from 'classnames';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import searchIcon from '../../assets/image/searchIcon.svg';
import useDebounce from '../commons/hooks/useDebounce';
import './SearchBar.scss';
import { setValue } from './searchSlice';

export interface ISearchBarProps {
	className?: string;
}

export default function SearchBar({ className }: ISearchBarProps) {
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState('');

	const debouncedSearch = (searchedText: typeof searchValue) => {
		if (searchedText?.length >= 2) {
			dispatch(setValue(searchedText));
		} else if (searchedText?.length === 0) {
			dispatch(setValue(''));
		}
	};

	useDebounce(searchValue, debouncedSearch, 500);

	return (
		<div className={classNames(['hc-search-bar', className])}>
			<img className='hc-search-bar__icon' src={searchIcon} alt='search' />
			<input
				className='hc-search-bar__input'
				placeholder='25 milyon’dan fazla ürün içerisinde ara'
				value={searchValue}
				onChange={({ target: { value } }) => setSearchValue(value)}
			/>
		</div>
	);
}
