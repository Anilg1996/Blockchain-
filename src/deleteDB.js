const express = require('express');
// const route = require('./route/route.js');
const mongoose = require('mongoose');
const coinModel = require("./model/coinModel")

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://kanil485333:anil16shalini@project1.lboaf6t.mongodb.net/crypto?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const deleteData = async (req,res) => {
    try{
        await coinModel.deleteMany();
        console.log("Data deleted Successfully");
    } catch (err) {
        console.log(err);
    }};
    deleteData();