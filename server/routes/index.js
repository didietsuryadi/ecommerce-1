var express = require('express');
var router = express.Router();
var itemController = require('../controllers/itemController')
var customerController = require('../controllers/customerController')
var transactionController = require('../controllers/transactionController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

// routing books
router.get('/api/item/:id', itemController.readItem)
router.get('/api/items', itemController.readItems)
router.post('/api/item', itemController.createItem)
router.put('/api/item/:id', itemController.updateItem)
router.delete('/api/item/:id', itemController.deleteItem)

// //routing customer
router.get('/api/customer/:id', customerController.readCustomer)
router.get('/api/customers', customerController.readCustomers)
router.post('/api/customer', customerController.createCustomer)
router.put('/api/customer/:id', customerController.updateCustomer)
router.delete('/api/customer/:id', customerController.deleteCustomer)

// //routing transaction
router.get('/api/transaction/:id', transactionController.readTransaction)
router.get('/api/transactions', transactionController.readTransactions)
router.post('/api/transaction', transactionController.createTransaction)
router.put('/api/transaction/:id', transactionController.updateTransaction)
router.delete('/api/transaction/:id', transactionController.deleteTransaction)
router.post('/api/transaction/addbook/:id', transactionController.addItemsToCart)
router.post('/api/transaction/deletebook/:id', transactionController.deleteItemsfromCart)


module.exports = router;
