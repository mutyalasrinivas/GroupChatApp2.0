const express = require('express');
const port=2000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');



const app = express();
const sequelize = require('./util/database')
const userRoutes= require('./routes/user')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(async (req, res, next) => {
    if(req.cookies.user){
        req.user = await User.findOne({
            where : {
                jwt : req.cookies.user
            }
        });
    }
    next();
})


app.use('/user',userRoutes);



sequelize.sync()
.then(
    app.listen(port,()=>{
        console.log("server running at :",port);
    })
)
.catch((err)=>{
    console.log(err);
})