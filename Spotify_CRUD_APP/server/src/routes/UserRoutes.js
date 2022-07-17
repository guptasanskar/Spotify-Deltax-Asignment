const express=require('express');
const router=express.Router();
const UserController=require('../controllers/UserController');
const VerifyTokenAuthorization = require('../middlewares/VerifyTokenAndAuthorization')


const {createUser,getUsers,getUserById,updateUser,deleteUser}=UserController;

// create route
router.post('/create',createUser);
// get route
router.get('/getAll',VerifyTokenAuthorization,getUsers);
// get route by id
router.get('/get/:id',getUserById);
// update route
router.put('/update/:id',updateUser);
// delete route
router.delete('/delete/:id',VerifyTokenAuthorization,deleteUser);

module.exports=router;
