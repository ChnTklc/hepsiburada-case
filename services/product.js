const products = require('../db/products.json');
const itemsPerPage = 12;

function getColorsAndBrandsMeta(data) {
	const colors = {};
	const brands = {};

	data.forEach((p) => {
		if (colors[p.color]) {
			colors[p.color] += 1;
		} else {
			colors[p.color] = 1;
		}

		if (brands[p.brand]) {
			brands[p.brand] += 1;
		} else {
			brands[p.brand] = 1;
		}
	});

	return { colors, brands, total: data.length };
}

function get({ q, page = 1, color, brand, sort }) {
	const offset = (page - 1) * itemsPerPage;
	let searchedProducts = products;

	if (color) {
		searchedProducts = searchedProducts.filter((p) => p.color.toLowerCase() === color.toLowerCase());
	}

	if (brand) {
		searchedProducts = searchedProducts.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
	}

	if (q) {
		searchedProducts = searchedProducts.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
	}

	const colorsAndBrandsMeta = getColorsAndBrandsMeta(searchedProducts);

	switch (sort) {
		case 'LowToHigh':
			searchedProducts.sort((a, b) => {
				const pA = a.discount
					? Math.round((a.price - a.price * (a.discount / 100) + Number.EPSILON) * 100) / 100
					: a.price;
				const pB = b.discount
					? Math.round((b.price - b.price * (b.discount / 100) + Number.EPSILON) * 100) / 100
					: b.price;
				return pA - pB;
			});
			break;
		case 'HighToLow':
			searchedProducts.sort((a, b) => {
				const pA = a.discount
					? Math.round((a.price - a.price * (a.discount / 100) + Number.EPSILON) * 100) / 100
					: a.price;
				const pB = b.discount
					? Math.round((b.price - b.price * (b.discount / 100) + Number.EPSILON) * 100) / 100
					: b.price;
				return pB - pA;
			});
			break;
		case 'AToZ':
			searchedProducts.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case 'ZToA':
			searchedProducts.sort((a, b) => b.title.localeCompare(a.title));
			break;
		default:
			searchedProducts.sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime());
			break;
	}

	searchedProducts = searchedProducts.slice(offset, offset + itemsPerPage);

	const meta = { q, page, color, brand, itemsPerPage, ...colorsAndBrandsMeta };

	return { data: searchedProducts, meta };
}

module.exports = { get };
