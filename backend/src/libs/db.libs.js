import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
    try {
        const dbUrl = process.env.MONGO_URL

        if(!dbUrl){
            throw new Error('Database URL is not defined in environment variables')
        }

        await mongoose.connect(dbUrl)
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB', err)
        })

    } catch (error) {
         console.error('Error connecting to database:', error);
    }
}

export default db