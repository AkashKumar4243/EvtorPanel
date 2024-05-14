import Product from "../model/Product.js";

const addproductData = () => {
    const productData = [
        {
            image : "https://www.w3schools.com/images/picture.jpg",
            productName: "Laptop",
            productId: "PROD001",
            date: new Date(),
            price: 1000,
            productDetails: "Brand: XYZ, 8GB RAM, 256GB SSD",
            invoice: "INV001"
        },
        {
            image : "https://www.w3schools.com/images/picture.jpg",
            productName: "Smartphone",
            productId: "PROD002",
            date: new Date(),
            price: 500,
            productDetails: "Brand: ABC, 6.5-inch display, 128GB storage",
            invoice: "INV002"
        }
    ];

    Product.insertMany(productData)
    .then(() => {
        console.log("Custom data added successfully");
    })
    .catch(err => {
        console.error("Error adding custom data:", err);
    });
}

export default addproductData;