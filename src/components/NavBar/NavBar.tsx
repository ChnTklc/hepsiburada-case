import logo from '../../assets/image/logo.svg';
import Basket from '../Basket/Basket';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.scss';

function NavBar() {
	return (
		<div className='hc-navbar-container'>
			<img className='hc-navbar-container__logo' src={logo} />
			<SearchBar className='hc-navbar-container__search-bar' />
			<Basket className='hc-navbar-container__basket' />
		</div>
	);
}
export default NavBar;
