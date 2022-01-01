import classNames from 'classnames';
import { useAppSelector } from '../../app/hooks';
import './Basket.scss';

export interface IBasketProps {
	className: string;
}

export default function Basket({ className }: IBasketProps) {
	const basketItems = useAppSelector((state) => state.basket.items);

	return (
		<div className={classNames(['hc-basket', className])}>
			{!!basketItems?.length && <span className='hc-basket__count'>{basketItems.length}</span>}
			{'Sepetim'}
		</div>
	);
}
