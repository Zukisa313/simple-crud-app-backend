
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require("./routes/product.route.js")
const app = express();

app.use(express.json());
// Using from instead of JSON
app.use(express.urlencoded({extended:false}));


// routes
app.use('/api/products',productRoutes)

app.get("/", (req,res) =>{
   res.send("Hello from Node Js Think")
})

mongoose.connect("mongodb+srv://admin:%40Hu%2AxBq49_kU_3z@backenddb.vebr2gh.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
})
.catch(()=>{
    console.log("Lets just stop !!!")
})