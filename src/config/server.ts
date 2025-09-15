import express from 'express';
import db from './database';
import userRouter from '../routes/userRoute';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use('/api', userRouter);



async function initializeServer() {
    try {
        await db.authenticate();
        console.log('Database connected successfully.');
        await db.sync({ alter: true }); // Sync models with the database
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

initializeServer();
