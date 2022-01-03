const express = require('express');
const router = express.Router();
const product = require('../services/product');

/* GET search&filter products */
router.get('/', function (req, res, next) {
	try {
		res.json(product.get(req.query));
	} catch (err) {
		console.error(`Error while getting products `, err.message);
		next(err);
	}
});

module.exports = router;
