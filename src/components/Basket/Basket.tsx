import classNames from 'classnames';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import './Basket.scss';
import BasketList from './BasketList';

export interface IBasketProps {
	className: string;
}

export default function Basket({ className }: IBasketProps) {
	const basketItems = useAppSelector((state) => state.basket.items);

	const [showList, setShowList] = useState(false);

	const onMouseOver = () => {
		setShowList(!!basketItems?.length);
	};

	return (
		<div className={classNames(['hc-basket', className])} onMouseLeave={() => setShowList(false)}>
			<button
				className={classNames('hc-basket__button', { 'hc-basket__button--list-shown': showList })}
				type='button'
				onMouseOver={onMouseOver}
			>
				{!!basketItems?.length && <span className='hc-basket__count'>{basketItems.length}</span>}
				{'Sepetim'}
			</button>
			{showList && <BasketList className='hc-basket__list' />}
		</div>
	);
}
