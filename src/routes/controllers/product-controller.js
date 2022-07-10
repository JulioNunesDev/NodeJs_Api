'use strict';

exports.post = (req, res, next)=>{
    res.status(201).send({title: "teste"})
}

exports.put = (req, res, next)=>{
    res.status(200).send()
}

exports.delete = (req, res, next)=>{
    res.status(200).send()
}