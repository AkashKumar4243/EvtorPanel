import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image : String,
    productName: String,
    productId: String,
    date: Date,
    price: Number,
    productDetails: String,
    invoice: String
});

const Product = mongoose.model('Product', productSchema);
export default Product;
