const Route = require("express").Router();
const AuthMongo = require("../models/1.Auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

Route.post("/login", async (req, res) => {
    // res.send("this is login!!");
    const { username, password } = req.body;
     
    const A1 = await AuthMongo.find({
        username
    });
    if (A1) {
        for (qq of A1) {
            console.log(qq);
        const checkPassword=bcrypt.compareSync(password,qq.password)
        const Id = qq._id.toString();
        if(!checkPassword) return res.status(400).json("Wrong password or username!")
        console.log(qq._id.toString());
        const token=jwt.sign({id:Id},"secretkey")
        console.log(token);
        //  const Pas = qq.password;
    //   const{Pas,...others}= RR1;
    const Da = {
        username,
        email: qq.email,
        id: Id
    }
    console.log(Da);
      res.cookie("accessToken",token,{
        HttpOnly:true,
       // expires: 28*24*60*60 *1000,  
      }).status(200).json(Da);
    }
}
    else {
        return res.status(409).send("User not found!");
    }
});

Route.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    // res.send("this is register!!");
    const A1 = await AuthMongo.findOne({
        username,
    }).then(async (data) => {
        if (data) return res.status(409).send("User already exists!");
        const salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(password,salt);
         
        const details = {
            email,
            username,
            password: hashPassword
        }

        const A2 = await new AuthMongo(details).save().then((d) =>{
         return res.status(200).json(d);
        } )
        
    })
});

Route.post("/logout", async (req, res) => {
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User Logged Out")
});

module.exports = Route;