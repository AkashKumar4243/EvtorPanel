import mongoose from "mongoose";

const connect = () => {
    const mongoUri = "mongodb://localhost:27017/evtorPanel";

    mongoose.connect(mongoUri).
    then(() => {console.log("MognoDb connected Successfully")}).
    catch(err => {console.log("MongoDb connection failed" , err)})
}

export default connect ;





