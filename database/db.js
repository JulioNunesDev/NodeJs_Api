const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://teste:teste@apicluster.geygt.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('Conexão com sucesso ao MongoDB');
}).catch((err)=>{
    console.log('erro ao conectar: ', err);
})