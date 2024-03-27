const mongoose = require("mongoose");
const URI = 'mongodb://localhost:27017/netflix'

const Connection = async()=>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to mongodb")
    } catch (error) {
        console.log(`database error: ${error}`)
        
    }
}
module.exports = Connection



