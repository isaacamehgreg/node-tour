const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json());//this is a middleware

app.get('/', (req,res) => {
    console.log('i was checked')
    res.status(200).send('hello from server');
});

// app.get('/', (req,res) => {
//     res.status(200).json({'message':'hello from server', 'name':'isaac ameh'});
// });

//get tours
app.get('/api/v1/tours',(req, res)=>{
   res.status(200).json({ 
       status:'success',
       results: tours.length,
       data:{
           tours:tours
       }
    });
    
})


//create a tour
app.post('/api/v1/tours',(req,res)=>{
    
    console.log(req.body);
    res.send(`good`)
});


//get a single tour

app.get('/api/v1/tours/:id/:x?/:y?', (req,res)=>{


    const id = req.params.id *1;

    const tour = tours.find(el =>el.id === req.params.id);
    res.status(200).json({ 
        status:'success',
       
        data:{
            tour,
        }
     }
     );


     console.log(req.params);
     res.send('success');
});

// update tours
app.patch('/api/v1/tours/:id', (req,res)=>{
    console.log(req.body.id);

    if(req.body.id*1 > tours.length){
        return   res.status(200).json({
            status:'fail',
            data:{ 
                tours:'invalid tour'
            }
        })
    }


    res.status(200).json({
        status:'success',
        data:{ 
            tours:'tours update'
        }
    })
})






app.listen(port, ()=>{
    console.log(`sever started at ${port}`);
});
