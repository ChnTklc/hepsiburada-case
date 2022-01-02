import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import './Basket.scss';
import { removeItem } from './basketSlice';

export interface IBasketListProps {
	className: string;
}

export default function BasketList({ className }: IBasketListProps) {
	const dispatch = useDispatch();
	const basketItems = useAppSelector((state) => state.basket.items);

	const onItemRemove = (id: string) => {
		dispatch(removeItem(id));
	};

	return (
		<ul className={classNames(['hc-basket-list', className])}>
			{basketItems.map(({ id, imageURL, title }) => (
				<li key={id} className='hc-basket-list__item'>
					<div className='hc-basket-list__item__image-container'>
						<img className='hc-basket-list__item__image-container__image' src={imageURL} alt={title} />
					</div>
					<div className='hc-basket-list__item__content'>
						<span className='hc-basket-list__item__content__title'>{title}</span>
						<button
							className='hc-basket-list__item__content__button'
							type='button'
							onClick={() => onItemRemove(id)}
						>
							{'Kaldır'}
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
