'use strict';
const Product = require('../../models/Product')

exports.post = (req, res, next)=>{
    const produto = new Product(req.body)
    produto.save().then((produt)=>{
        res.status(201).send({message: 'Produto criado com sucesso!'})
    }).catch((err)=>{
        res.status(201).send({message: "Nao foi possivel criar produto!", data: err})
    })
}

exports.put = (req, res, next)=>{
    res.status(200).send()
}

exports.delete = (req, res, next)=>{
    res.status(200).send()
}