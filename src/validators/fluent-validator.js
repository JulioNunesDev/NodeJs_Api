const { validate } = require("../models/Product")

let erros = []

function ValidatorFluent(){
    erros =  []
}

ValidatorFluent.prototype.isRequired =( value, message) =>{
        if(!value || value.length <= 0){
            erros.push({message: message})
        }
}

ValidatorFluent.prototype.hasMinLen =( value, min , message) =>{
    if(!value || value.length <= 3){
        erros.push({message: message})
    }
}

ValidatorFluent.prototype.erros = ()=>{
    return erros;
}

ValidatorFluent.prototype.isValid = ()=>{
    return erros.length === 0;
}
module.exports = ValidatorFluent