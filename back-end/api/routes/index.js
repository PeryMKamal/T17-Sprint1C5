var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  loziproductCtrl = require('../controllers/LoziController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');





   //-------------------------------Lozi Routes-----------------------------------

   router.get('/lozi/getProducts', loziproductCtrl.getProducts);
   router.get('/lozi/getProduct/:loziproductsId', loziproductCtrl.getProduct);
   router.post('/lozi/createProduct', loziproductCtrl.createProduct);
   router.get(
     '/lozi/getProductsBySeller/:seller',
     loziproductCtrl.getProductsBySeller
   );
 
   router.get(
     '/lozi/getProductsByComponent/:component',
     loziproductCtrl.getProductsByComponent
   );
router.patch('/lozi/updateProduct/:loziproductsId', loziproductCtrl.updateProduct);
router.delete('/lozi/deleteProduct/:loziproductsId', loziproductCtrl.deleteProduct);


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
