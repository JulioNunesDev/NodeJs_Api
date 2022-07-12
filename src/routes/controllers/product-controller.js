'use strict';
const Product = require('../../models/Product')
const ValidatorProduct = require('../../validators/fluent-validator')

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
    const Validador = new ValidatorProduct()
    Validador.hasMinLen(req.body.title, 3 ,'O titulo deve conter pelo menos 3 caracteres')

    //os dados sao inválidos

    if(!Validador.isValid()){
        res.status(400).send(Validador.erros()).end()
        return
    }
    const produto = new Product(req.body)
    produto.save().then((produt)=>{
        res.status(201).send({message: 'Produto criado com sucesso!'})
    }).catch((err)=>{
        res.status(201).send({message: "Nao foi possivel criar produto!", data: err})
    })
}

exports.put = (req, res, next)=>{
    Product.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
      }
    }).then((produt)=>{
        res.status(200).send({message: 'Produto Atualizado com sucesso!'})
    })
    .catch((err)=>{
        res.status(400).send({message: 'Falha ao Atualizar o produto!', data: err});
    })
}

exports.delete = (req, res, next)=>{
    Product.findOneAndRemove(req.params.id, {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price
        }
      }).then((produt)=>{
          res.status(200).send({message: 'Produto Removido com sucesso!'})
      })
      .catch((err)=>{
          res.status(400).send({message: 'Falha ao Remover o produto!', data: err});
      })
}