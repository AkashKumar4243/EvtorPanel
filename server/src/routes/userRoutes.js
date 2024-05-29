import jwt from "jsonwebtoken"
import express, { json } from "express";
import User from "../model/User.js";

const router = express.Router();

router.get('/dashboard', async (req,res) => { 
    try {
        const user = await User.findOne({mobileNumber : "9917744243"});

        if(!user){
            res.status(501).send("User not found ");
        }

        const data = {
            totalBalance : user.balance,
            rfid : user.rfidCardNumber,
            totalBooking : user.totalBooking,
            totalBuyProduct : user.totalBuyProduct
        }
        // console.log(data)
        const token = jwt.sign({
            rfid : user.rfidCardNumber
         },
         process.env.MYJWTTOKEN,
         {
            expiresIn : "7h"
         });
        res.status(200).json({
            data,
            token
        })
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.get('/dashboard/wallet',async (req,res) => {
    try {
        const user = await User.findOne({mobileNumber : "9917744243"});

        if(!user){
            res.status(501).send("User not found ");
        }

        const data = {
            totalBalance : user.balance,
            rfid : user. rfidCardNumber
        }
        console.log(data)

        
        res.status(200).json(data)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.get('/dashboard/profile', async (req,res) => {
    try {
        const user = await User.findOne({mobileNumber : "9917744243"});

        if(!user){
            res.status(501).send("User not found ");
        }

        const data = {
            name : user.name,
            totalBalance : user.balance,
            rfid : user.rfidCardNumber,
            mobileNumber : user.mobileNumber,
            vehicleNumber : user.vehicleNumber
        }
        console.log(data)
        res.status(200).send(data)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.put('/dashboard/profile/update',async (req,res) => {
    try {
        const id = req.body.mobileNumber;
        const newData = req.body;

        const user = await User.updateOne({mobileNumber:id},{$set : newData})

        console.log(user)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.post('/dashboard/profile/updatebalance',async (req,res) => {
    try {
        const data = req.body;
        console.log(data)
        const user = await User.updateOne({rfidCardNumber:data.rfidCardNumber},{$set : data})
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

export default router;


  