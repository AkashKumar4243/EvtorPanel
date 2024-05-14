import express from "express"
import Booking from "../model/Booking.js";
import Product from "../model/Product.js";
import Charger from "../model/Charger.js";
import Offer from "../model/Offer.js";

const router = express.Router();

router.get('/dashboard/bookinghistory',async (req,res) => {
    try {
        const bookinghistory = await Booking.find();

        if(!bookinghistory) {
            res.status(501).send("there is no booking history")
        }

        console.log(bookinghistory)
        res.status(200).json(bookinghistory)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
});

router.get('/dashboard/buyproduct' ,async (req,res) => {
    try {
        const products = await Product.find();

        if(!products) {
            res.status(501).send("there are no product")
        }

        console.log(products)
        res.status(200).json(products)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
});

router.get("/dashboard/mychargers" ,async (req,res) => {
    try {
        const chargerData = await Charger.find();

        if(!chargerData) {
            res.status(501).send("there are no charger available")
        }

        console.log(chargerData)
        res.status(200).json(chargerData)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
});

router.get("/dashboard/myoffer" , async (req,res) => {
    try {
        const myOffer = await Offer.find();

        if(!myOffer) {
            res.status(501).send("there are no offer available")
        }

        console.log(myOffer)
        res.status(200).json(myOffer)
        
    } catch (error) {
        res.status(400).send("connection error :" , error)
    }
});

export default router;