const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
mongoose.connect(`mongodb+srv://${user}:${pass}@apicluster.geygt.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('Conexão com sucesso ao MongoDB');
}).catch((err)=>{
    console.log('erro ao conectar: ', err);
})