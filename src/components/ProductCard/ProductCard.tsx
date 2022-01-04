import classNames from 'classnames';
import { IProduct } from '../commons/interfaces';
import './ProductCard.scss';

export interface IProductCardProps {
	className?: string;
	item: IProduct;
}

export default function ProductCard({
	className,
	item: { imageURL, title, brand, color, price, discount }
}: IProductCardProps) {
	const currency = 'TL';

	return (
		<div className={classNames('hc-product-card', className)}>
			<div className='hc-product-card__image-container'>
				<img className='hc-product-card__image-container__image' src={imageURL} alt={title} loading='lazy' />
			</div>
			<div className='hc-product-card__details'>
				<div className='hc-product-card__details__title'>{title}</div>
				<div className='hc-product-card__details__features'>
					<div className='hc-product-card__details__features__brand'>
						<strong>{'Marka:'}</strong>
						{` ${brand}`}
					</div>
					<div className='hc-product-card__details__features__color'>
						<strong>{'Renk:'}</strong>
						{` ${color}`}
					</div>
				</div>
				<div className='hc-product-card__details__prices'>
					<div className='hc-product-card__details__prices__net'>
						<strong>{`${
							discount
								? Math.round((price - price * (discount / 100) + Number.EPSILON) * 100) / 100
								: price
						} ${currency}`}</strong>
					</div>
					{!!discount && (
						<div className='hc-product-card__details__prices__original-discount'>
							<span className='hc-product-card__details__prices__original-discount__original'>
								{`${price} ${currency}`}
							</span>
							<strong className='hc-product-card__details__prices__original-discount__discount'>
								{`${discount}%`}
							</strong>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
