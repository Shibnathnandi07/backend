import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';


const connectDB = async () => {
    try {
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionIntance.connection.host}`);

    } catch (error) {
        console.log("MONGOO connection FAILED: ", error);
        process.exit(1);
    }
}

export default connectDB;