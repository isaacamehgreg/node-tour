const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
app.use(express.json());//this is a middleware
// app.get('/', (req,res) => {
//     res.status(200).send('hello from server');
// });

// app.get('/', (req,res) => {
//     res.status(200).json({'message':'hello from server', 'name':'isaac ameh'});
// });


app.get('/api/v1/tours',(req, res)=>{
   res.status(200).json({ 
       status:'success',
       results: tours.length,
       data:{
           tours:tours
       }
    });
    
})

app.post('/api/v1/tours',(req,res)=>{
    cosole.log(req.body);
    res.send('good')
})

app.listen(port, ()=>{
    console.log(`sever started at ${port}`);
});
