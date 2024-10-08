// handle the request ( get, post, put, delete )
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const usersController1 = require('../controllers/userSignin');
const itemsController2 = require('../controllers/handleitems');
const itemsController3 = require('../controllers/handlecompanyorders');
const itemsController4 = require('../controllers/displayitems');
const itemsController5 = require('../controllers/handleshoporders');
const itemsController6 = require('../controllers/notification');
const itemsController7 = require('../controllers/Reports');
const itemsController8 = require('../controllers/Return');

router.post('/add_user', usersController.addUser);
router.get('/get_users', usersController.getUsers);
router.get('/get_user/:userID', usersController.getUser);
router.put('/update_users/:userID', usersController.updateUsers);
router.put('/update_userss/:userID', usersController.updateUserss);

router.get('/get_itemss_forecast', itemsController2.getItemsForForecasting);
router.put('/update_user/:userId', usersController.updateUser);
// router.put('/update_users/:userID', usersController.updateUser1);
router.delete('/delete_users/:userID', usersController.deleteUsers);

router.post('/signin', usersController1.signIn);

router.post('/add_item', itemsController2.addItem);
router.post('/add_item00', itemsController2.addItem00);
router.get('/get_itemss', itemsController2.getItems01);
router.get('/gets_item/:itemName', itemsController2.getsItems);
router.get('/get_items/:ItemNo', itemsController2.getItem);
router.get('/get_items', itemsController2.getItems90);
// notification
router.get('/get_item040', itemsController2.getItem040);
router.delete('/delete_items/:itemNo/:batchNo', itemsController2.deleteItem);

// get items to edit
router.get('/get_itemd/:itemNo/:batchNo', itemsController2.geteditItem);
router.put('/update_item/:itemNo/:batchNo', itemsController2.updateItem);

router.post('/add_companyorders', itemsController3.addCompanyOrders);
router.get('/get_companyorders', itemsController3.getCompanyOrders);
router.get('/get_order_details/:orderno', itemsController3.getCompanyOrdersByOrderNo)

router.post('/add_shoporders', itemsController5.addShopOrders);
router.get('/get_shoporders', itemsController5.getShopOrders);
router.get('/get_shoporders/:orderNo', itemsController5.getshopOrderByOrderNo)
router.get('/get_shoporder_details/:orderNo', itemsController5.getshopOrdersByOrderNo)

router.get('/display_items', itemsController4.getdisplay)
// router.put('/display_items1', itemsController4.editdisplay1)
router.post('/add_notifications', itemsController6.addnotifications)
router.delete('/delete_notification/:itemNo/:batchNo', itemsController6.deletenotifications)

router.get('/get_reports', itemsController7.getreports)
router.get('/get_reports1', itemsController7.getreports1)
router.get('/get_reports2', itemsController7.getreports2)
router.get('/get_reports3', itemsController7.getreports3)
router.get('/get_reports4', itemsController7.getreports4)
router.get('/get_reports5', itemsController7.getreports5)

// return handling
router.post('/add_return', itemsController8.addReturn);

// Get reportss
router.get('/get_salesreport', itemsController5.getSalesReport);

module.exports = router;