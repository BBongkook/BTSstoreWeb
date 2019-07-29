const exp = require('express');
const path = require('path');
var server = exp();

server.use(exp.static(path.join(__dirname, 'dist/btsstore')));
server.get('/*',(req,res)=>{
    res.sendFile(__dirname + '/dist/btsstore/index.html');
})


server.listen(80,()=>{
    console.log('server stated at 80 port!');
})