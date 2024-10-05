import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
const port = process.env.PORT || 3000;
import { MongoClient, ServerApiVersion } from 'mongodb';


//config
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: true
}));

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.c7c3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });



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
//   console.log(`Example app listening on port ${port}`)
})
