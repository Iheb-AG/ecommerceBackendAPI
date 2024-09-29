const express = require('express')
const Product = require('../models/product')
const Category = require('../models/category');
const { default: mongoose } = require('mongoose');

const router = express.Router();
const api = process.env.API_URL

//ajout 
router.post(`/`,async (req,res)=>{
  const category = await Category.findById(req.body.category)

  if(!category) return res.status(400).json({
    success:false,
    message : "Invalid category"
  })

  let product = new Product({
    name : req.body.name,
    description : req.body.description,
    image : req.body.image,
    brand : req.body.brand,
    price: req.body.price,
    countInStock : req.body.countInStock,
    category: req.body.category,
    rating:req.body.rating
  })

  product = await product.save()

  if(!product) return res.status(500).json({
    success:false,
    message: "the product could not be created"
  })

  return res.status(201).json({
    success:true,
    message:"Product created successfully"
  })
})

//modification
router.put('/:productID',async (req,res)=>{
  const product = await Product.findByIdAndUpdate(req.params.productID,{
    name : req.body.name,
    description : req.body.description,
    image : req.body.image,
    brand : req.body.brand,
    price: req.body.price,
    countInStock : req.body.countInStock,
    category: req.body.category,
    rating:req.body.rating
  })

  if(!product) return res.status(500).send('could not update your category')

    res.send(product)
  
})

//suppression 
router.delete('/:productID',(req,res)=>{
  if(!mongoose.isValidObjectId(req.params.productID)) 
    return res.status(400).json({
      success:false,
      message:"invalid product id"
    })

  Category.findByIdAndDelete(req.params.product).then((product)=>{
    if(product){
      return res.status(200).json({
        success:true,
        message:"product deleted successfully"
      })
    }else{
      return res.status(404).json({
        success:false,
        message:"product not found"
      })
    }
  }).catch((err)=>{
    console.log(err)
    res.status(500).json({
      success:false,
      message:"server error occured",
      error:err
    })
  })

  
})

// consultation a la liste des produits 
router.get(`/`,async (req,res)=>{
  let filter = {};

  if(req.query.categories){
    filter = {category:req.query.categories.split(','),
    }
  }

  if(req.query.minPrice){
    filter = {...filter,price:{$gte:req.query.minPrice},
    }
  }

  if(req.query.maxPrice){
    filter = {...filter,price:{$lte:req.query.maxPrice},
    }
  }

  if(req.query.productKeyword){
    filter = {...filter,name:{ $regex: `.*${name}.*`, $options: 'i' },
    }
  }

  
  const products = await Product.find(filter).populate("category")
  
  if(!products){
    res.status(500).json({
      msg:"error retrieving products"
    })
  }else{
    console.log(products)
    res.status(200).json(products)
  }
})

router.get('/:productID',async(req,res)=>{
  const product = await Product.findById(req.params.productID)

  if(!productList){
    return res.status(500).json({
      success:"failed"
    })
  }

  return res.send(productList);
})

// recherche de produits par criteres (nom , categorie , prix , etc )

// selon le nember a passer en parametre :

router.get(`/count/:count`,async (req,res)=>{
  const count = req.params.count ? req.params.count : 0
  const products = await Product.find().populate("category").limit(count)
  
  if(!products){
    res.status(500).json({
      msg:"error retrieving products"
    })
  }else{
    console.log(products)
    res.status(200).json(products)
  }
})




module.exports = router
