const User = require('../models/UserModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const Signup = async (req, res) => {
    const newUser = new User( {
        Name: req.body.Name,
        Email: req.body.Email,
        Password: CryptoJS.AES.encrypt(req.body.Password, process.env.PASS_SEC).toString()

    });
    
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(400).send(err);
    }
}
const Login = async (req, res) => {
    try{
        
        const user = await User.findOne({Email: req.body.Email});
        
        if(!user){
            res.status(400).send('Invalid email or password');
        }
        const decryptedPass = CryptoJS.AES.decrypt(user.Password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if(decryptedPass !== req.body.Password){
            res.status(400).send('Invalid email or password');
        }
        const token = jwt.sign({_id: user._id,isAdmin: user.isAdmin}, process.env.TOKEN_SEC);
        const {Password, ...userWithoutPassword} = user._doc;
        res.status(200).json({
            token,
            user: userWithoutPassword
        });

    }
    catch(err){
        res.status(400).send(err);
    }
}

module.exports = {
    Signup,
    Login
}