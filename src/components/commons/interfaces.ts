type MaxAllowedBoundary = 101;

type Mapped<N extends number, Result extends Array<unknown> = []> = Result['length'] extends N
	? Result
	: Mapped<N, [...Result, Result['length']]>;

type NumberRange = Mapped<MaxAllowedBoundary>[number];

export interface IProduct {
	id: number;
	title: string;
	brand: string;
	imageURL: string;
	color: string;
	price: number;
	discount?: NumberRange;
	createdDate: string;
}
