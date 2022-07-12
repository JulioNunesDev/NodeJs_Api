const mongoose = require('mongoose')
const Customer = require('../models/customer')



 
exports.create = async (data) =>{
    const customer = new Customer(data)
    await customer.save()
 }
