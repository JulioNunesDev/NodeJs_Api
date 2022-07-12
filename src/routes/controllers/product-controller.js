'use strict';
const Product = require('../../models/Product')
const ValidatorProduct = require('../../validators/fluent-validator')
const Repository = require('../../repositories/product-repository')

exports.get = async (req, res, next)=>{
    try {
        var data = await Repository.get()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({message: 'Falha ao requisitar Dados'})
    }
    
    
}

exports.getBySlug = async (req, res, next)=>{
try {
    const data = await  Repository.getBySlug(req.params.slug)
    res.status(200).send(data)
} catch (error) {
    res.status(400).send({
        message: 'Erro ao requisitar dados'
    })
}
    
}

exports.getById = async (req, res, next)=>{
  try {
    const data = await Repository.getById(req.params.id)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({message: 'Nao foi possivel fazer a requisição'})
  }
    
}


exports.getByTag = async (req, res, next)=>{
  try {
    const data = await Repository.getByTag(req.params.tag)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({message: 'Nao foi possivel fazer a requisição'})
  }
}

exports.post = async (req, res, next)=>{
    const Validador = new ValidatorProduct()
    Validador.hasMinLen(req.body.title, 3 ,'O titulo deve conter pelo menos 3 caracteres')

    //os dados sao inválidos
    if(!Validador.isValid()){
        res.status(400).send(Validador.erros()).end()
        return
    }

    try {
        await Repository.create(req.body)
        res.status(200).send({message: 'Enviado com sucesso'})
    } catch (error) {
        res.status(200).send({message: 'Falha ao enviar Produto'})
    }
   
    
}

exports.put = async (req, res, next)=>{
    try {
        await Repository.update(req.params.id, req.body)
        res.status(200).send({message: 'Produto Atualizado com sucesso!'})
    } catch (error) {
        res.status(400).send({message: 'Falha ao Atualizar o produto!', data: err});
    }
}

exports.delete = async (req, res, next)=>{
    try {
        await Repository.delete(id)
        res.status(200).send({message: 'Produto Removido com sucesso!'})
    } catch (error) {
        res.status(400).send({message: 'Falha ao Remover o produto!', data: err});
    }
}