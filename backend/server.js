import express from 'express';
import dotenv from 'dotenv';
// Important to call dotenv above the environment variables
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'

const port = process.env.PORT || 5000;

// Calling our DB
connectDB();

const app = express();


app.get('/', (req, res) => {
    res.send('API is Running! Good To Go Web-Dev-Codi');
});


app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)


// Start the Server up 
app.listen(port, () => console.log(`Server Running On Port ${port}`));




