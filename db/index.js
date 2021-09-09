const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/data')
mongoose.connection.once('open',(err)=>{
    if(err){
        console.log('err:'+err)
        return
    }
    console.log('mongodb链接成功❀');
})