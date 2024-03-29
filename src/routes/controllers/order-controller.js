const guid = require('guid')
const ValidatorProduct = require('../../validators/fluent-validator')
const Repository = require('../../repositories/Orde-repository')




exports.get = async (req, res, next)=>{
    try {
     var data = await Repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message: 'Falha ao processar sua requisição!'})
    }
}


exports.post = async (req, res, next)=>{
    try {
        await Repository.create({
            customer: req.body,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        })
        res.status(200).send({message: 'Pedido cadastrado com sucesso!'})
    } catch (error) {
        res.status(500).send({message: 'Falha ao processar sua requisição!'})
    }
}
