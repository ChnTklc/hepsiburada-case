import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import Modal from '../Modal/Modal';
import './Basket.scss';
import { removeItem } from './basketSlice';

export interface IBasketListProps {
	className: string;
}

export default function BasketList({ className }: IBasketListProps) {
	const dispatch = useDispatch();
	const basketItems = useAppSelector((state) => state.basket.items);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [removingItemId, setRemovingIteId] = useState<number>();

	const onItemRemove = () => {
		if (!!removingItemId) {
			dispatch(removeItem(removingItemId));
			setModalOpen(false);
		}
	};

	return (
		<ul className={classNames(['hc-basket-list', className])} role='BasketList'>
			<>
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
								onClick={() => {
									setModalOpen(true);
									setRemovingIteId(id);
								}}
							>
								{'Kaldır'}
							</button>
						</div>
					</li>
				))}
				<Modal
					open={modalOpen}
					title={'Ürün Siliniyor!'}
					content={'Ürünü silmek istediğinize emin misiniz?'}
					footer={
						<div className='hc-basket-list__modal-buttons'>
							<button className='hc-basket-list__modal-buttons__ok' type='button' onClick={onItemRemove}>
								{'Evet'}
							</button>
							<button
								className='hc-basket-list__modal-buttons__cancel'
								type='button'
								onClick={() => setModalOpen(false)}
							>
								{'Hayır'}
							</button>
						</div>
					}
				/>
			</>
		</ul>
	);
}
