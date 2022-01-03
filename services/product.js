const products = require('../db/products.json');
const listPerPage = 12;

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

	return { colors, brands };
}

function get({ q, page = 1, color, brand }) {
	const offset = (page - 1) * listPerPage;
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

	searchedProducts = searchedProducts.slice(offset, offset + listPerPage);

	const meta = { q, page, color, brand, ...colorsAndBrandsMeta };

	return { data: searchedProducts, meta };
}

module.exports = { get };
