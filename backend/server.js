import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js";
//api endpoint

// app config

const app=express();
const port=process.env.PORT || 4000;


// midddleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)

app.get('/',(req,res)=>{
    res.send("hellooooo")
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})

// mongodb+srv://21dcs005:4UeSDNxBJSzd6Fwl@cluster0.q0ej8.mongodb.net/?