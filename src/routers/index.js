'use strict';

const express = require('express');
const apiKey = require('../middlewares/apiKey.middleware');
const permission = require('../middlewares/permissions.middleware');
const router = express.Router();

router.use('/v1/api/cart', require('./admin/cart.router'));

// middleware check api key
router.use(apiKey);
router.use(permission('0000'));

router.use('/v1/api/payment', require('./admin/payment.router'));
router.use('/v1/api/order', require('./admin/order.router'));
router.use('/v1/api/checkout', require('./admin/checkout.router'));
router.use('/v1/api/discount', require('./admin/discount.router'));
router.use('/v1/api/upload', require('./admin/upload.router'));
router.use('/v1/api/product', require('./admin/product.router'));
router.use('/v1/api/category', require('./admin/category.router'));
router.use('/v1/api', require('./admin/access.router'));

module.exports = router;
