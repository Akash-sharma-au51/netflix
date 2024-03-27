const express = require("express")
const dotenv = require("dotenv")
const cookieparser = require("cookie-parser")
const connection = require("./utils/Database.config")
const userRoute = require('./routes/UserRoute')


connection()

dotenv.config({
    path:".env"

})
const app = express()


//middle wares
app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({extended:true}))

//api
app.use("/api/user/",userRoute)

app.get("/",(req,res)=>{
    res.json({
        message:"this is msg from backend",
        success:true
    })
})




app.listen(process.env.port,()=>{
    console.log(`app is running on ${process.env.port}`)
})