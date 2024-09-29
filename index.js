const express = require("express");
require('dotenv/config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Product = require('./models/product')
const authJwt = require("./helper/expressjwt");

const app = express()
const api = process.env.API_URL


const productsRouter = require('./routes/productsRoute');
const categoriesRouter = require('./routes/categoriesRoute')
const usersRouter = require('./routes/usersRoute');
const ordersRouter = require('./routes/ordersRouter')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  dbName:"temp-eshop-database"
}).then(()=>{
  console.log("[MONGO DB]: connected successfully")
}).catch((err)=>{
  console.log(err)
})



app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(authJwt() )

//ROUTES 
app.use(`${api}/products`,productsRouter)
app.use(`${api}/categories`,categoriesRouter)
app.use(`${api}/users`,usersRouter)
app.use(`${api}/orders`,ordersRouter)






app.listen(3000,()=>{
  console.log(api)
  console.log("listening on port 3000")
})
