import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    offerName: String,
    description: String,
    code: String
});

const Offer = mongoose.model('Offer', offerSchema);
export default Offer;
