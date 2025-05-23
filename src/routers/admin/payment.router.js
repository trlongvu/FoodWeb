'use trict';

const express = require('express');
const PaymentController = require('../../controllers/payment.controller');
const verifyMoMoSignature = require('../../middlewares/signature.middleware');
const { asyncHandle } = require('../../middlewares/asyncHandle.middleware');
const { authentication } = require('../../auth/authentication');
const router = express.Router();

router.use(authentication);

router.post('/payment', asyncHandle(PaymentController.createPayment));
router.get('/callback', asyncHandle(PaymentController.callback));
router.post(
  '/notify',
  verifyMoMoSignature,
  asyncHandle(PaymentController.notify),
);

module.exports = router;
