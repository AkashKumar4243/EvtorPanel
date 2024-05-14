import Charger from "../model/Charger.js";

const addchargerData = () => {
    const chargerData = [
        {
            nameOfCharger: "Fast Charger A",
            rating: 4.5,
            address: "123 Main St",
            timeStamp: new Date()
        },
        {
            nameOfCharger: "Standard Charger B",
            rating: 3.8,
            address: "456 Elm St",
            timeStamp: new Date()
        }
    ];

    Charger.insertMany(chargerData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addchargerData;