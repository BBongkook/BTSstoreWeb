const exp = require('express');
const path = require('path');
var server = exp();

server.use(exp.static(path.join(__dirname, 'dist/btsstore')));
server.get('/*',(req,res)=>{
    res.sendFile(__dirname + '/dist/btsstore/index.html');
})


server.listen(1587,()=>{
    console.log('server stated at 1587 port!');
})