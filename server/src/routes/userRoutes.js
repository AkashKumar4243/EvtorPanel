
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
        res.status(200).send(data)
        
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
        }
        console.log(data)
        res.status(200).send(data)
        
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

export default router;


  