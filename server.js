
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5050;

app.use(morgan("combined"));


app.get('/user', (req, res)=>{
    console.log('in users api');
    insideFunction1();
    res.status(200).json({message:'success'});
});

function insideFunction1(){
    console.log('insideFunction 1');
    insideFunction2();
}
function insideFunction2(){
    console.log('insideFunction 2');
}

app.listen(PORT, ()=>{
    console.log('server is running on port:', PORT);
})