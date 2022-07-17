const jwt=require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, process.env.TOKEN_SEC, (err, user) => {
            if(err){
                console.log(err);
                return res.status(403).send('Token is not valid');
            }
            req.user = user;
            console.log("user is verified");
            next();
        });
    }
    else{
        res.status(403).send('You are not authenticated');
    }
}
module.exports = verifyToken;