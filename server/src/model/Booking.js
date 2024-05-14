import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    chargingStation : String,
    chargingStationAddress: String,
    bookingId: String,
    timeStamp: Date,
    rupees: Number,
    status: String,
    invoice: String
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
