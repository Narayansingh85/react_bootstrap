const mongoose = require('mongoose')
const DB = 'mongodb+srv://narayan:1412@cluster0.87i8b.mongodb.net/module1?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('Connected Successfully')
}).catch((err)=>{
    console.log(err)
})
