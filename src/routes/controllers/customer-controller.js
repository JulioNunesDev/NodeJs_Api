const Customer = require('../../models/customer')
const ValidatorProduct = require('../../validators/fluent-validator')
const Repository = require('../../repositories/customer-repository')

exports.post = async (req, res, next)=>{
    const Validador = new ValidatorProduct()
    Validador.hasMinLen(req.body.name, 5, 'Name deve conter pelo menos 5 caracteres')
    Validador.hasMinLen(req.body.password, 6, 'a senha deve conter pelo menos 5 caracteres')

    if(!Validador.isValid()){
        res.status(400).send(Validador.erros()).end()
        return
    }
    try {
        await Repository.create(req.body)
        res.status(200).send({message: 'Usuario criado com sucesso!'})
    } catch (error) {
        res.status(500).send({message: 'Erro ao criar Usuario!'})
    }
}
