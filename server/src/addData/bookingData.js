import Booking from "../model/Booking.js";

const addbookingData = () => {
    const bookingData = [
        {
            chargingStation : "Advant Dc Charging Station",
            chargingStationAddress: "123 Main St, City",
            bookingId: "BK123456",
            timeStamp: new Date(),
            rupees: 50,
            status: "completed",
            invoice: "INV001"
        },
        {
            chargingStationAddress: "456 Elm St, Town",
            bookingId: "BK987654",
            timeStamp: new Date(),
            rupees: 75,
            status: "in progress",
            invoice: "INV002"
        }
    ];
    Booking.insertMany(bookingData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addbookingData;