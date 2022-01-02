import classNames from 'classnames';
import searchIcon from '../../assets/image/searchIcon.svg';
import './SearchBar.scss';

export interface ISearchBarProps {
	className: string;
}

export default function SearchBar({ className }: ISearchBarProps) {
	return (
		<div className={classNames(['hc-search-bar', className])}>
			<img className='hc-search-bar__icon' src={searchIcon} alt='search' />
			<input
				className='hc-search-bar__input'
				placeholder='25 milyon’dan fazla ürün içerisinde ara
'
			/>
		</div>
	);
}
