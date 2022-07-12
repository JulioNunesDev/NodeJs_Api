const mongoose = require('mongoose')
const Product = require('../models/Product')


exports.get = (req, res, next)=>{
   return Product.find({active: true}, 'title price slug')
}

exports.getBySlug = (slug)=>{
   return Product.findOne({slug: slug ,active: true},'title price description slug tags')
}

exports.getById = (id)=>{
    return Product.findById(id)
 }

exports.getByTag = (tag)=>{
    return Product.find({tags: tag, active: true}, 'title price slug tags description' )
 }


 exports.create= (data) =>{
    const produto = new Product(data)
    return produto.save()
 }


 exports.update = (id, data) =>{
   return Product.findByIdAndUpdate(id, {
        $set: {
          title: data.title,
          description: data.description,
          price: data.price
        }
      })
 }

 exports.delete = (id) =>{
    return  Product.findOneAndRemove(id)
 }