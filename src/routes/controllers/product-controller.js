'use strict';
const Product = require('../../models/Product')

exports.get = (req, res, next)=>{
    Product.find({active: true}, 'title price slug').then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
    
}

exports.getBySlug = (req, res, next)=>{
    Product.findOne({slug: req.params.slug ,active: true}, 'title price description slug tags').then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
}

exports.getById = (req, res, next)=>{
    Product.findById(req.params.id).then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
}


exports.getByTag = (req, res, next)=>{
    Product.find({tags: req.params.tag, active: true}, 'title price slug tags description' ).then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
}

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