import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IProductFetchParams, useGetProductsMutation } from '../../app/hcAPI';
import { useAppSelector } from '../../app/hooks';
import { sortOptions, TSort } from '../commons/interfaces';
import HcLoader from '../HcLoader/HcLoader';
import ProductCard from '../ProductCard/ProductCard';
import './Main.scss';

export default function Main() {
	const [getProducts, { data, isLoading }] = useGetProductsMutation();
	const { data: products, meta } = data || {};
	const searchedValue = useAppSelector((state) => state.search.value);
	const [queryParams, setQueryParams] = useState<IProductFetchParams>({ page: 1 });

	useEffect(() => {
		getProducts(queryParams);
	}, [getProducts, queryParams]);

	useEffect(() => {
		setQueryParams((prevParams) => ({ ...prevParams, q: searchedValue }));
	}, [searchedValue]);

	const onPrevClick = () => {
		setQueryParams((prevParams) =>
			prevParams?.page && prevParams.page > 1 ? { ...prevParams, page: prevParams.page - 1 } : prevParams
		);
	};

	const onNextClick = () => {
		setQueryParams((prevParams) => {
			if (meta?.itemsPerPage && meta?.total && prevParams?.page) {
				return prevParams.page * meta.itemsPerPage < meta.total
					? { ...prevParams, page: prevParams.page + 1 }
					: prevParams;
			}

			return prevParams;
		});
	};

	const onSortSelect = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
		setQueryParams((prevParams) => ({ ...prevParams, sort: value !== '-1' ? (value as TSort) : undefined }));
	};

	const getPaginationNumbers = () => {
		const numbersArr = Array.from(
			{ length: Math.round((meta?.total || 1) / (meta?.itemsPerPage || 1)) },
			(_, i) => i + 1
		);

		return numbersArr.map((pageNumber) => (
			<button
				className={classNames('hc-main__content__items__pagination__button', {
					'hc-main__content__items__pagination__button--active': queryParams?.page === pageNumber
				})}
				key={pageNumber}
				type='button'
				onClick={() =>
					setQueryParams((prevParams) =>
						prevParams?.page === pageNumber ? prevParams : { ...prevParams, page: pageNumber }
					)
				}
			>
				{pageNumber}
			</button>
		));
	};

	return (
		<>
			<div className='hc-main'>
				<div className='hc-main__header'>
					<div className='hc-main__header__titles'>
						<strong className='hc-main__header__titles__title'>{'Cep Telefonu'}</strong>
						{!!queryParams?.q && (
							<div className='hc-main__header__titles__sub-title'>
								<span className='hc-main__header__titles__sub-title__left'>{'Aranan Kelime: '}</span>
								<span className='hc-main__header__titles__sub-title__word'>{queryParams?.q}</span>
							</div>
						)}
					</div>
					<select className='hc-main__header__sort' value={queryParams?.sort || -1} onChange={onSortSelect}>
						<option value='-1'>{'Sıralama'}</option>
						{Object.entries(sortOptions).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className='hc-main__content'>
					<div className='hc-main__content__actions'>
						<div className='hc-main__content__actions__item hc-main__content__actions__color-filter'>
							<h5 className='hc-main__content__actions__item__title'>{'Renk'}</h5>
							<div className='hc-main__content__actions__item__options hc-main__content__actions__color-filter__options'>
								{Object.entries(meta?.colors || {})?.map(([color, count]) => (
									<button
										className={classNames(
											'hc-main__content__actions__item__options__button hc-main__content__actions__color-filter__options__item',
											{
												'hc-main__content__actions__item__options__button--selected':
													queryParams?.color === color
											}
										)}
										key={color}
										type='button'
										onClick={() =>
											setQueryParams((prevParams) => ({
												...prevParams,
												color: queryParams?.color === color ? undefined : color
											}))
										}
									>{`${color} (${count})`}</button>
								))}
							</div>
						</div>
						<div className='hc-main__content__actions__item hc-main__content__actions__sort'>
							<h5 className='hc-main__content__actions__item__title'>{'Sıralama'}</h5>
							<div className='hc-main__content__actions__item__options hc-main__content__actions__sort__options'>
								{Object.entries(sortOptions).map(([key, value]) => (
									<button
										className={classNames(
											'hc-main__content__actions__item__options__button hc-main__content__actions__sort__options__item',
											{
												'hc-main__content__actions__item__options__button--selected':
													queryParams?.sort === key
											}
										)}
										key={key}
										type='button'
										onClick={() =>
											setQueryParams((prevParams) => ({
												...prevParams,
												sort: queryParams?.sort === key ? undefined : (key as TSort)
											}))
										}
									>
										{value}
									</button>
								))}
							</div>
						</div>
						<div className='hc-main__content__actions__item hc-main__content__actions__brand-filter'>
							<h5 className='hc-main__content__actions__item__title'>{'Marka'}</h5>
							<div className='hc-main__content__actions__item__options hc-main__content__actions__brand-filter__options'>
								{Object.entries(meta?.brands || {})?.map(([brand, count]) => (
									<button
										className={classNames(
											'hc-main__content__actions__item__options__button hc-main__content__actions__brand-filter__options__item',
											{
												'hc-main__content__actions__item__options__button--selected':
													queryParams?.brand === brand
											}
										)}
										key={brand}
										type='button'
										onClick={() =>
											setQueryParams((prevParams) => ({
												...prevParams,
												brand: queryParams?.brand === brand ? undefined : brand
											}))
										}
									>{`${brand} (${count})`}</button>
								))}
							</div>
						</div>
					</div>
					<div className='hc-main__content__items'>
						<div className='hc-main__content__items__grid'>
							{products?.map((product) => (
								<ProductCard key={product.id} item={product} />
							))}
						</div>
						{!!products?.length && (
							<div className='hc-main__content__items__pagination'>
								<button
									className='hc-main__content__items__pagination__button hc-main__content__items__pagination__prev'
									type='button'
									onClick={onPrevClick}
								>
									{'<'}
								</button>
								{getPaginationNumbers()}
								<button
									className='hc-main__content__items__pagination__button hc-main__content__items__pagination__next'
									type='button'
									onClick={onNextClick}
								>
									{'>'}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<HcLoader loading={isLoading} />
		</>
	);
}
