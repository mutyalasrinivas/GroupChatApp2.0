const sequelize = require('../util/database');
const { Op } = require("sequelize");
const User = require('../models/User');
 const passwordEncryption = require('../util/encryptPassword');
const jwtToken = require('../util/jwtToken');
  

exports.getUsers = async (req, res) => {
    try{
        const usersList = await User.findAll({
            where: {
                id: {
                    [Op.not]: req.user.id
                }
            }
        });
        res.status(200).json(usersList);
    }
    catch(err){
        console.error(err);
        res.status(400).json(null);
    }
}

exports.createNewUser = async (req, res) => {
    try{
        const user = await User.findOne({
            where : {
                email : req.body.userEmail
            }
        });
        if(!user){
            const jwt = await jwtToken.createToken(req.body.userEmail);
            req.body.userPassword = await passwordEncryption.encryptPassword(req.body.userPassword);
            User.create({
                name: req.body.userName,
                email: req.body.userEmail,
                password: req.body.userPassword,
                jwt : jwt
            }).then(result => {
                res.status(201).send('User Created, Please Login')
            }).catch(err => {
                res.send('Something went wrong!')
            }); 
        }else{
            res.status(200).send('Email Already Exists!')
        }
    }
    catch(err){
        console.error(err);
        res.status(400).json(null);
    }
}

 
exports.authenicateUser = async (req, res) => {
    try{
        const user = await User.findOne({
            where : {
                email : req.body.userEmail
            }
        });
        if(user){
            if(await passwordEncryption.decryptPassword(req.body.userPassword, user.password)){
                res.cookie('user', user.jwt);
                res.status(200).send('Account Verified!, Moving to Home Page')
            }else{
                res.status(401).send('Incorrect Email or Password')
            }
        }else{
            res.status(404).send(`Account Doesn't Exist`);
        }
    }
    catch(err){
        console.error(err);
        res.status(400).json(null);
    }
}
 