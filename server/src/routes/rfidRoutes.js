import express from "express";
import RFID from "../model/Rfid.js";

const router = express.Router();


router.get('/dashboard/rfid',async (req,res) => {
    try {
        const rfid = await RFID.find();

        if(!rfid) {
            res.status(501).send("Rfid is not assigned ")
        }

        res.status(200).send(rfid);
        console.log(rfid)
        
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.put('/dashboard/rfid/blockcard',async (req,res) => {
    try {
        const {name, mobileNumber} = req.body;

        console.log(mobileNumber);

        // if card is already block then handle it too by checking the status first . if card status is active then it is allowed to block but if it is already block then show that it is already blocked.

        const blockedCard = await RFID.updateOne({mobileNumber},{
            status : false
        });

        if(!blockedCard.modifiedCount) {
            console.log(blockedCard);
            res.status(501).send("Card Blocked Failed");
            return ;
        }

        res.status(200).send("Card Block successfully");
        console.log(blockedCard);
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.put('/dashboard/rfid/unblockcard',async (req,res) => {
    try {
        const {name, mobileNumber} = req.body;

        console.log(mobileNumber);

        // if card is already block then handle it too by checking the status first . if card status is active then it is allowed to block but if it is already block then show that it is already blocked.

        const unblockedCard = await RFID.updateOne({mobileNumber},{
            status : true
        });

        if(!unblockedCard.modifiedCount) {
            console.log(unblockedCard);
            res.status(501).send("Card Blocked Failed");
            return ;
        }

        res.status(200).send("Card UnBlock successfully");
        console.log(unblockedCard);
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
})

router.post('/dashboard/rfid/addcard', async(req,res) => {
    try {
        const data = req.body;
        console.log(data)
        const rfidCardData = {
            name : data.name,
            vehicleNumber : data.vehicleNumber,
            mobileNumber : data.mobileNumber,
            rfidNumber : data.rfidNumber
        }

        const newRfidCardData = await RFID.create(rfidCardData);

        res.status(200).send(newRfidCardData);
        console.log(newRfidCardData);

    } catch (error) {
        console.log(error)
        res.status(400).send("connection failed ");
    }
})

router.post('/dashboard/rfid/addExistingCard', async (req,res) => {
    const data = req.body;
    console.log(data);

    const responseData = await RFID.find({mobileNumber : data.mobileNumber});

    const rfidCardData = {
        name : data.name,
        vehicleNumber : responseData[0].vehicleNumber,
        mobileNumber : responseData[0].mobileNumber,
        rfidNumber : (Math.floor(100000 + Math.random() * 900000)).toString()
    }

    const newRfidCardData = await RFID.create(rfidCardData);

    console.log(newRfidCardData)
    res.status(200).json(rfidCardData)

})

router.post('/dashboard/rfid/addcard/verify', (req,res) => {
    res.send("dashboard/addcard/verify"); 
})

export default router;