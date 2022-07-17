const User=require('../models/UserModel');

const createUser=async (req,res)=>{
    const user=new User(req.body);
    try{
        const newUser=await user.save();
        res.send(newUser);
    }
    catch(err){
        res.send(err);
    }
}
const getUsers=async (req,res)=>{
    try{
        const users=await User.find();
        res.send(users);
    }
    catch(err){
        res.send(err);
    }
}
const getUserById=async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
}
const updateUser=async (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
}
const deleteUser=async (req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
}
module.exports={createUser,getUsers,getUserById,updateUser,deleteUser};