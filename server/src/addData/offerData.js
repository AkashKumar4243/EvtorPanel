import Offer from "../model/Offer.js";

const addofferData = () => {
    const offerData = [
        {
            offerName: "Summer Sale",
            description: "Get 20% off on all products",
            code: "SUMMER20"
        },
        {
            offerName: "New User Offer",
            description: "Get ₹100 off on your first purchase",
            code: "NEWUSER100"
        }
    ];

    Offer.insertMany(offerData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addofferData;