const express = require('express');
const app = express();
app.use(require('cors')())  //引入跨域组件
app.use(express.json())   //表示express识别json

app.get('/',async(req,res)=>{
    res.send('index')
})

app.listen('3000',()=>{
    console.log('3000端口启动成功')
})