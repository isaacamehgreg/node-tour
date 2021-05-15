const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json());//this is a middleware


const getAllTours =(req, res)=>{
    res.status(200).json({ 
        status:'success',
        results: tours.length,
        data:{
            tours:tours
        }
     });
}
con



const getTour =  (req,res)=>{


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
}

const createTour = (req,res)=>{

}

const updateTour =(req,res)=>{

}
const deleteTour = (req,res)=>{

}





//get tours
app.get('/api/v1/tours', getAllTours)


//create a tour
app.post('/api/v1/tours',createTour);


//get a single tour

app.get('/api/v1/tours/:id/:x?/:y?',getTour);

// update tours
app.patch('/api/v1/tours/:id', updateTour)

//delete tour
app.delete('/api/v1/tours/:id', (req,res)=>{
    res.status(204).json({
        status:'success',
        data:{ 
            tours:`post ${req.body.id} deleted`
        }
    })
});






app.listen(port, ()=>{
    console.log(`sever started at ${port}`);
});
