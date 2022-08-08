const mongoose = require('mongoose')
const Order = require('../models/Orde')



 
exports.get = async (data) =>{
    const res = Order.find({})
    return res;
 }


 exports.create = async (data) =>{
    const Order = new Customer(data)
    await Order.save()
 }
