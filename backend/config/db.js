import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://21dcs005:4UeSDNxBJSzd6Fwl@cluster0.q0ej8.mongodb.net/food-del').then(()=>console.log("DB connection successful"))
}
// 4UeSDNxBJSzd6Fwl