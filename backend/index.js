import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import db from './src/libs/db.libs.js';


// Routes
import authRoute from './src/routes/auth.route.js';


dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());  // Middleware to parse cookies



// database connection 
db()
.then(() => {
    console.log('Database connected successfully');
})
.catch((err) => {
    console.error('Database connection failed:', err);
})

// Routes

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message:"welcome to digital aquarium "
    })
})


app.use('/api/auth', authRoute)





// Use routes
app.use((req,res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});