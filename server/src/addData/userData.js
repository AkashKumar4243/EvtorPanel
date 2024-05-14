import User from "../model/User.js";

const addUserData = () => {
    const userData = [
        {
            name: "John Doe",
            balance: 500,
            mobileNumber: "1234567890",
            vehicleNumber: "ABC1234",
            rfidCardNumber: "RFID001",
            totalBooking: 3,
            totalBuyProduct: 10
        }
    ];

    User.insertMany(userData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addUserData;