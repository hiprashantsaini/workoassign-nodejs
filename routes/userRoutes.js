const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(express.urlencoded({extended:true}));

// views
router.get('/',(req,res)=>{
    res.render("home");
  })
router.get('/worko/user',(req,res)=>{
    res.render("createUser");
  } );

router.get('/worko/edituser/:userId',userController.editUserLoad);


// Controllers
router.get('/worko/allusers',userController.getAllUsers);
router.get('/worko/user/:userId', authMiddleware, userController.getUserById);
router.post('/worko/user',userController.createUser);
// router.put('/worko/user/:userId', authMiddleware, userController.updateUser);
router.post('/worko/updateuser/:userId',userController.updateUser);

router.patch('/worko/user/:userId', authMiddleware, userController.updateUser);
// router.delete('/worko/user/:userId', authMiddleware, userController.softDeleteUser);
router.get('/worko/deleteuser/:userId', userController.softDeleteUser);

module.exports = router;
