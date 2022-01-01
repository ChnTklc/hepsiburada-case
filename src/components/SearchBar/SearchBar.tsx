import classNames from 'classnames';
import './SearchBar.scss';

export interface ISearchBarProps {
	className: string;
}

export default function SearchBar({ className }: ISearchBarProps) {
	return <div className={classNames(['hc-search-bar', className])} />;
}
