const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json()); //this is a middleware

// all funtion can be a meidle ware
//how to creat midle ware
app.use((req, res, next)=>{
    console.log('hello from the middleware');
    console.log()
    next();
})

app.use(
    (req,res) =>{
        res.requestTime = new Date().toISOString;

    }
    next()
)

/////////end  middleware creation///////////////////////////


const getAllTours =(req, res)=>{
    res.status(200).json({ 
        status:'success',
        results: tours.length,
        data:{
            tours:tours
        }
     });
}




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
    res.status(200).json({ 
        status:'success',
        results: tours.length,
        data:{
            tours:"tours created"
        }
     });
}

const updateTour =(req,res)=>{
    res.status(200).json({ 
        status:'success',
        results: tours.length,
        data:{
            tours:"updated"
        }
     });
}
const deleteTour = (req,res)=>{
    res.status(204).json({ 
        status:'success',
        results: tours.length,
        data:{
            tours:"delete"
        }
     });
}





// //get tours
// app.get('/api/v1/tours', getAllTours)


// //create a tour
// app.post('/api/v1/tours',createTour);


// //get a single tour

// app.get('/api/v1/tours/:id/:x?/:y?',getTour);

// // update tours
// app.patch('/api/v1/tours/:id', updateTour)

// //delete tour
// app.delete('/api/v1/tours/:id', deleteTour);

/////////......refactored route better

app.route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);
app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);






app.listen(port, ()=>{
    console.log(`sever started at ${port}`);
});
