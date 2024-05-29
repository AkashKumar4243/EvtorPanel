import express, { json } from "express"
import connect from "./dbConnect.js";
import userRoutes from "./routes/userRoutes.js"
import rfidRoutes from "./routes/rfidRoutes.js"
import chargerRoutes from "./routes/chargerRoutes.js"
import addUserData from "./addData/userData.js";
import addbookingData from "./addData/bookingData.js";
import addchargerData from "./addData/chargerData.js";
import addofferData from "./addData/offerData.js";
import addproductData from "./addData/productData.js";
import addRfidData from "./addData/rfidData.js";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors())

app.use(express.json());

connect();

// addUserData();
// addbookingData();
// addchargerData();
// addofferData();
// addproductData();
// addRfidData();

app.use('/api/users',userRoutes)
app.use('/api/rfidcard',rfidRoutes)
app.use('/api/charger',chargerRoutes)

app.listen(PORT, () => {
    console.log(`server is listening at PORT ${PORT}`);
})