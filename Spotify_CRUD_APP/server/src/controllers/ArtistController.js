const Artist=require('../models/ArtistsModel');

const createArtist=async (req,res)=>{
    const artist=new Artist(req.body);
    
    try{
        const newArtist=await artist.save();
        res.send(newArtist);
    }
    catch(err){
        res.send(err);
    }
}
const getArtists=async (req,res)=>{


    try{
        const artists=await Artist.find().populate('Songs');
        res.send(artists);
    }
    catch(err){
        res.send(err);
    }
}
const getArtistById=async (req,res)=>{
    try{
        const artist=await Artist.findById(req.params.id);
        res.send(artist);
    }
    catch(err){
        res.send(err);
    }
}


const updateArtist=async (req,res)=>{
    try{
        const artist=await Artist.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(artist);
    }
    catch(err){
        res.send(err);
    }
}
const deleteArtist=async (req,res)=>{
    try{
        const artist=await Artist.findByIdAndDelete(req.params.id);
        res.send(artist);
    }
    catch(err){
        res.send(err);
    }
}
module.exports={createArtist,getArtists,getArtistById,updateArtist,deleteArtist};
