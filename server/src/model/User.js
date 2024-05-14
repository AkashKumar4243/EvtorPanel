import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type : String
    },
    balance: {
        type : Number
    },
    mobileNumber: {
        type : String
    },
    vehicleNumber: {
        type : String
    },
    rfidCardNumber: {
        type : String
    },
    totalBooking: {
        type : Number
    },
    totalBuyProduct:{
        type : Number
    },
    timeStamp: Date
});

const User = mongoose.model('User', userSchema);

export default User;
