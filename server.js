const exp = require('express');
const path = require('path');
var server = exp();

server.use(exp.static(path.join(__dirname, 'dist/btsstore')));
server.get('/*',(req,res)=>{
    res.sendFile(__dirname + '/dist/btsstore/index.html');
})


server.listen(process.env.PORT || 3000,()=>{
    console.log('server started');
})