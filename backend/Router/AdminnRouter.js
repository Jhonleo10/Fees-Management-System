const express = require('express');

const router = express.Router();

const Admin = require('../Module/AdminModule');


router.post('/signup', async (req,res) =>
{

    try {

        const add_data =  await Admin(req.body);
    const results = add_data.save();
    if(results)
    {
       res.send({"msg": "Added Successfully"})
    }

    else
    {
        res.send({"msg": "Unable to Add"})
 
    }
        
    } catch (error) {
        res.send({"msg": error})

    }
})

router.post('/signin', async (req,res) =>
{
   try {
    const check_data = await Admin.findOne(
        {email:req.body.email,
        password:req.body.password}
    )

     
        
    if(check_data)
    {
        res.send({"msg": check_data})
    }

    else
    {
        res.send({"msg": "Invalid Details"})
    }
   } catch (error) {
    res.send({"msg": "Something wrong", error})

   }

})

module.exports = router;