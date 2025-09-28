const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const userRouter = require('./controller/UserController');

const app = express();

const PORT = 3000; 

app.use(express.json());

app.use('/user', userRouter);


mongoose.connect('mongodb://127.0.0.1:27017/mongonode-tut')
        .then(()=> {
                        console.log('Connection successful')
                        app.listen(PORT, ()=>{
                            console.log(`Server started at port ${PORT}`);
                        })
        }) 
        .catch( err => console.log('MongoDB error : ',err)); 

