
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5050;

app.use(morgan("combined"));


app.get('/user', (req, res)=>{
    res.status(200).json({message:'success'});
});

app.listen(PORT, ()=>{
    console.log('server is running on port:', PORT);
})