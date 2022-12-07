const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())
mongoose.set('strictQuery',true)
app.use("/", route)

mongoose.connect("mongodb+srv://kanil485333:anil16shalini@project1.lboaf6t.mongodb.net/crypto?retryWrites=true&w=majority",{
    useNewUrlParser:true
    
}).then(()=> console.log("MongoDb is Connected"))
.catch( err => console.log(err))

app.listen(process.env.PORT || 3000, function (){
     console.log('Express app running on port ' + (process.env.PORT || 3000))
});