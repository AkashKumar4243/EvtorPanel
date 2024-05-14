import mongoose from "mongoose";

const chargerSchema = new mongoose.Schema({
    nameOfCharger: String,
    rating: Number,
    address: String,
    timeStamp: Date
});

const Charger = mongoose.model('Charger', chargerSchema);
export default Charger;
