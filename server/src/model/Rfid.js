import mongoose from "mongoose";

const rfidSchema = new mongoose.Schema({
    name: String,
    profilePic : {
        type : String,
        default : "https://www.w3schools.com/images/picture.jpg"
    },
    rfidNumber: String,
    mobileNumber: String,
    status: {
        type : Boolean,
        default : true
    },
    vehicleNumber: String
});

const RFID = mongoose.model('RFID', rfidSchema);
export default RFID;
