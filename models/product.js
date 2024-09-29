const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  // we should have some information that defines the product either it's description or it's image , in this case, a textual description might have a priotiy than an image
  description:{ 
    type:String,
    required:true
  },
  image: String,
  brand:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  countInStock:{
    type:Number,
    required:true,
    min:0
  },
  // here we reference the category the product belongs to by it's id in the category collection
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
  },
  rating: {
    type:Number,
    default:0
  },
})


module.exports = mongoose.model('Product',productSchema);  
