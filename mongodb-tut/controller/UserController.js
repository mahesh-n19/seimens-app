const express = require('express'); 
const User = require('../model/user');

const router = express.Router();


router.get("", async (req,res)=>{

    // console.log("Request body : ",req.body);

    // res.send("GET user Hitt ...");

    console.log(req.url, ' Api Hit...');

    try 
    {
        const users = await User.find({});
        res.status(200).json({users});
    }
    catch(err)
    {
        res.status(500).json({"message" : "Internal server error"});
     }


});

router.get("/:id", async (req,res)=>{

    console.log(req.url, "Api Hitt....")
    try 
    {
        const user = await User.findById(req.params.id); 
        if(user)
            res.status(200).json(user);
        else 
            res.status(404).json({'message' : 'User not found'});
    }
    catch(err)
    {
        console.log("Error occurred : ",err);
        res.status(500).json({"message" : "Internal server error"});
    }


})

router.post("", async (req,res)=>{
    const body = req.body;
    
    try{
            const result = await User.create({
                firstName : body.firstName, 
                lastName : body.lastName, 
                email : body.email,
                gender : body.gender, 
                jobTitle : body.jobTitle
            });


            res.status(200).json({"message" : "User Inserted successfully", "record" : result });
    }
    catch(err)
    {
        res.status(500).json({"message" : "Internal server error", "error" : err });
    }
    
});


module.exports = router;