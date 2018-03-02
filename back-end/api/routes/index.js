var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  componentproductCtrl = require('../controllers/ComponentController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');





   //-------------------------------Component Routes-----------------------------------

   router.get('/c5/getProducts', componentproductCtrl.getProducts);
   router.get('/c5/getProduct/:ComponentproductsId', componentproductCtrl.getProduct);
   router.post('/c5/createProduct', componentproductCtrl.createProduct);
   router.get(
     '/c5/getProductsBySeller/:seller',
     componentproductCtrl.getProductsBySeller
   );
 
   router.get(
     '/c5/getProductsByComponent/:component',
     componentproductCtrl.getProductsByComponent
   );
router.patch('/c5/updateProduct/:ComponentproductsId', componentproductCtrl.updateProduct);
router.delete('/c5/deleteProduct/:ComponentproductsId', componentproductCtrl.deleteProduct);


//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);


module.exports = router;
