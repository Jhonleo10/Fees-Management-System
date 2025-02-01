const express = require('express');
const Router = express.Router();
const Student = require('../Module/Studentmodule');



Router.post('/add', async (req,res) =>
{

    try {

        const getdata = await Student.findOne({regno: req.body.regno});

        if(getdata)
        {
            res.send({message: "register NO Already Used"})
        }

        else
        {



             const add_data = Student(req.body);

            const results = add_data.save();

            if(results)
            {
                res.send({message:"Student Added Sucessfully"})
            }

            else
            {
                res.send("Failed")
            }
        }
                
            } catch (error) {
                res.send("Failed", error)
            }

        
})

Router.post('/view', async (req,res)=>
{

    try {

        const getdata = await Student.find();

    if(getdata)
    {
        res.send({message: getdata})
    }

    else
    {
        res.send({message: "Unable to find"})
    }
        
    } catch (error) {
        res.send({message: "Unable to find",error})

    }
})



Router.post('/getdata', async (req,res)=>
    {
    
        try {
    
            const getdata = await Student.findOne(req.body);
    
        if(getdata)
        {
            res.send({message: getdata})

            console.log(getdata);
            
        }
    
        else
        {
            res.send({message: "Unable to find"})
        }
            
        } catch (error) {
            res.send({message: "Unable to find",error})
    
        }
    })


    Router.post('/update',async (req,res)=>
    {
        try {
            
      console.log(req.body);
      
              const update_data =await Student.findOneAndUpdate(
               {regno : req.body.regno},
               {$set: req.body}
              )


              if(update_data)
              {
                res.send({"Message": "Data Updated Succesfully"})
              }

              else
              {
                res.send({"Message": "Unable to Update"})
              }


        } catch (error) {
            res.send({"Message": "error", error})
        }
    })

    Router.post('/delete',  async (req,res)=>
    {
        try {
            const delete_data =  await Student.findOneAndDelete(
            
                req.body
            
        )

        if(delete_data)
            {
              res.send({"Message": "Data Deleted Succesfully"})
            }

            else
            {
              res.send({"Message": "Unable to delete"})
            }
            
        } catch (error) {
            res.send({"Message": "Unable to delete"})

        }
    })

module.exports = Router;