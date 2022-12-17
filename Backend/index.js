const express = require('express')
const cors = require('cors')
require('./Database/config')
const AuthenticateUser = require('./Database/AuthenicateUser')

app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req,res)=>{ 
   if(!req.body.name || !req.body.email || !req.body.password){
        res.send({result:"Please enter the field"})
   }else{
      AuthenticateUser.findOne({email: req.body.email},async function(err, user){
         if(err) {
            console.log(err);
            res.status(401).send({result:"Invalid user"});
         }
         if(user){
            res.send({result:"User already exists"})
         }else{
            const newUser = new AuthenticateUser(req.body);
            const result = await newUser.save();
            res.send(result)
         }
      })
   }
})


app.post("/login", async (req,res) => {
   let user = await AuthenticateUser.findOne({email: req.body.email});
   if(!user){
      res.send({result:"Please register first"});
      console.log("Please register first");
   }else{
      res.send({email:req.body.email,
               password:req.body.password});
      console.log("Logged in successfully")
   } 
})

app.post("/products", async(req, res) => {

})

app.post("/addProducts", async(req, res) => {
   let product = 
})


app.listen(5000);
