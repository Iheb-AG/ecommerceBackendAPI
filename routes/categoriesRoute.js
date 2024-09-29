const Category = require("../models/category")
const express = require('express')
const router = express.Router();

router.get('/',async(req,res)=>{
  const categoryList = await Category.find()

  if(!categoryList){
    res.status(500).json({
      success:"failed"
    })
  }

  res.send(categoryList);
})

router.get('/:categoryID',async(req,res)=>{
  const categoryList = await Category.findById(req.params.categoryID)

  if(!categoryList){
    return res.status(500).json({
      success:"failed"
    })
  }

  return res.send(categoryList);
})




router.post('/',async (req,res)=>{
  let category = new Category({
    name:req.body.name,
  })

  category = await category.save();
  if(!category) return res.status(500).send('could not create your category')

  res.send(category)
})


router.put('/:categoryID',async (req,res)=>{
  const category = await Category.findByIdAndUpdate(req.params.categoryID,{
    name:req.body.name
  })

  if(!category) return res.status(500).send('could not update your category')

    res.send(category)
  
})


router.delete('/:categoryID',(req,res)=>{
  Category.findByIdAndDelete(req.params.categoryID).then((category)=>{
    if(category){
      return res.status(200).json({
        success:true,
        message:"category deleted successfully"
      })
    }else{
      return res.status(404).json({
        success:false,
        message:"Category not found"
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


module.exports = router
