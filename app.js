const express = require('express');
const app = express();
const port = 8000;

// app.get('/', (req,res) => {
//     res.status(200).send('hello from server');
// });

app.get('/', (req,res) => {
    res.status(200).json({'message':'hello from server', 'name':'isaac ameh'});
});



app.listen(port, ()=>{
    console.log(`sever started at ${port}`);

});
