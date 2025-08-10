import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middleswares
app.use(express.json());
app.use(cors());

// init routes
app.use("/api/song",songRouter);
app.use("/api/album", albumRouter);

app.get('/',(req,res)=>res.send("API IS WORKING!!"))
app.listen(port, ()=>console.log(`Port number: ${port}\nServer is running`))



