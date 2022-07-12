const mongoose = require('mongoose')
const Product = require('../models/Product')


exports.get = async ()=>{
   const res = await Product.find({active: true}, 'title price slug')
   return res;
}

exports.getBySlug = async (slug)=>{
   const res = await Product.findOne({slug: slug ,active: true},'title price description slug tags')
   return  res
  
}

exports.getById = async (id)=>{
   const res = await Product.findById(id)
   return  res
 }

exports.getByTag = (tag)=>{
   const res = Product.find({tags: tag, active: true}, 'title price slug tags description' )
   return  res
 }


 exports.create = async (data) =>{
    const produto = new Product(data)
    await produto.save()
 }


 exports.update = async (id, data) =>{
  await Product.findByIdAndUpdate(id, {
        $set: {
          title: data.title,
          description: data.description,
          price: data.price
        }
      })

   
 }

 exports.delete = async (id) =>{
   await  Product.findOneAndRemove(id)
 }