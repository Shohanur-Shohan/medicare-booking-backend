import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
const port = process.env.PORT || 3000;

//config
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: true
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})
