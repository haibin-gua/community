const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())   //表示express识别json
app.use(require('cors')())  //引入跨域组件
mongoose.connect('mongodb://localhost:27017/Login',{  //创建数据库
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
})
const Login = mongoose.model('Login',new mongoose.Schema({  //创建数据库模型
    username:{type:String},
    password:{type:String}
}))

app.get('/',async(req,res)=>{
    res.send('index')
})

app.post('/api/register',async(req,res)=>{
    const register = await Login.create(req.body)
    res.send(register)
})

app.listen('3000',()=>{
    console.log('3000端口启动成功')
})