const express  = require('express');
// const { report } = require('./CreateUser');
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.food_items,global.food_category])}

        catch(error){
             console.log(error.message);
             res.send("Server Error")
        }
    })

    module.exports=router;