import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
const port = process.env.PORT || 3000;
import mongoose from "mongoose";

//custom import
import authRoute from './Routes/auth.js'



//config
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: true
}));
app.use('/api/v1/auth', authRoute) //domain/api/v1/auth/register


//connect to database
const MONGO_URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.c7c3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
      await mongoose.connect(MONGO_URI, {});
      console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
      console.error('COULD NOT CONNECT TO DATABASE:', error.message);
  }
};



async function run() {
  try {
    app.get('/', (req, res)=>{
        console.log("hello  world");
        res.send("hello")
    })
  }
  catch{
    console.log("error")
  }
}
run()

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})
