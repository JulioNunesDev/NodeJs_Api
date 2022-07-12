'use strict';
const Product = require('../../models/Product')
const ValidatorProduct = require('../../validators/fluent-validator')
const Repository = require('../../repositories/product-repository')

exports.get = (req, res, next)=>{
    Repository.get()
    .then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
    
}

exports.getBySlug = (req, res, next)=>{
   Repository.getBySlug(req.params.slug)
    .then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
}

exports.getById = (req, res, next)=>{
   Repository.getById(req.params.id)
    .then((produt)=>{
        res.status(200).send(produt)
    }).catch((err)=>{
        res.status(201).send(err)
    })
}


exports.getByTag = (req, res, next)=>{
    Repository.getByTag(req.params.tag).then((produt)=>{
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

    Repository
    .create(req.body)
    .then((produt)=>{
        res.status(201).send({message: 'Produto criado com sucesso!'})
    }).catch((err)=>{
        res.status(201).send({message: "Nao foi possivel criar produto!", data: err})
    })
}

exports.put = (req, res, next)=>{
    Repository.update(req.params.id, req.body)
    .then((produt)=>{
        res.status(200).send({message: 'Produto Atualizado com sucesso!'})
    })
    .catch((err)=>{
        res.status(400).send({message: 'Falha ao Atualizar o produto!', data: err});
    })
}

exports.delete = (req, res, next)=>{
    Repository.delete(id)
    .then((produt)=>{
          res.status(200).send({message: 'Produto Removido com sucesso!'})
      })
      .catch((err)=>{
          res.status(400).send({message: 'Falha ao Remover o produto!', data: err});
      })
}