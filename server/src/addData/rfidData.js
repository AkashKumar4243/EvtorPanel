import RFID from "../model/Rfid.js";

const addRfidData = () => {
    const rfidData = [
        {
            name: "RFID Card 1",
            profilePic : "https://www.w3schools.com/images/picture.jpg",
            rfidNumber: "RFID001",
            mobileNumber: "1234567890",
            status: "active",
            vehicleNumber: "ABC1234"
        },
        {
            name: "RFID Card 2",
            profilePic : "https://www.w3schools.com/images/picture.jpg",
            rfidNumber: "RFID002",
            mobileNumber: "9876543210",
            status: "inactive",
            vehicleNumber: "XYZ5678"
        }
    ];

    RFID.insertMany(rfidData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addRfidData;