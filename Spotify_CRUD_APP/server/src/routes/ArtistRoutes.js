const express=require('express');
const router=express.Router();
const ArtistController=require('../controllers/ArtistController');
const VerifyTokenAuthorization = require('../middlewares/VerifyTokenAndAuthorization');

const {createArtist,getArtists,getArtistById,updateArtist,deleteArtist}=ArtistController;

// create route
router.post('/create',VerifyTokenAuthorization,createArtist);
// get route
router.get('/getAll',getArtists);
// get route by id
router.get('/get/:id',getArtistById);
// update route
router.put('/update/:id',VerifyTokenAuthorization,updateArtist);
// delete route
router.delete('/delete/:id',VerifyTokenAuthorization,deleteArtist);

module.exports=router;



