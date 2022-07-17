const express=require('express');
const router=express.Router();
const SongController=require('../controllers/SongController');
const VerifyTokenAuthorization = require('../middlewares/VerifyTokenAndAuthorization')
const uploadFile=require('../utils/uploadfile');


const {createSong,getSongs,getSongById,getSongByArtist,updateSong,deleteSong}=SongController;

// create route
router.post('/create',VerifyTokenAuthorization,uploadFile,createSong);
// get route
router.get('/getAll',getSongs);
// get route by id
router.get('/get/:id',getSongById);
// get route by artist
router.get('/getByArtist/:id',getSongByArtist);
// update route
router.put('/update/:id',VerifyTokenAuthorization,updateSong);
// delete route
router.delete('/delete/:id',VerifyTokenAuthorization,deleteSong);

module.exports=router;


