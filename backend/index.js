require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongo = require("mongoose");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 5001;
const CookieParser = require("cookie-parser");
app.use(logger());

mongo.connect(process.env.mongo).then(() => {
    console.log("connected to mongo!!");
});

app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5001'],
    // Access-Control-Allow-Origin: *,
    credentials: true,
}
))
app.use(CookieParser());

const AuthRoute = require("./routes/auth");
app.use("/auth", AuthRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `)
});
