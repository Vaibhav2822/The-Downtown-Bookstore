const express = require('express')
const cors = require('cors')
require('./Database/config')
const AuthenticateUser = require('./Database/AuthenicateUser')
const Novel = require('./Database/Novels')
const multer = require('multer')

app = express();
app.use(express.json());
app.use(cors());


const upload = multer({
   storage: multer.diskStorage({
      destination: function(req, file, cb){
         cb(null,"Novel-Images")
      },
      filename: function(req, file, cb){
         cb(null, file.fieldname + "-" + Date.now() + ".jpg")
      }
   })
}).single("novel_image");


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

app.get("/novels", async(req, res) => {  
   const novels = await Novel.find();
   res.send(novels);
})

app.post("/addNovel", async(req, res) => {
   if(!req.body.novelName || !req.body.novelPrice || !req.body.novelAuthorName || !req.body.novelPublisherName || !req.body.novelPublishedDate || !req.body.numberOfPages || !req.body.novelWeight || !req.body.novelLanguage || !req.body.novelISBNNumber){
      res.status(401).send({result:"Please enter the details"})
   }else{
      Novel.findOne({novelISBNNumber: req.body.novelISBNNumber}, async function(err, novel){
         if(err) {
            console.log(err);
            res.status(401).send({result:"Invalid Novel Format"});
         }
         if(novel){
            console.log(novel)  
            res.send({result:"Novel already exists"})
         }else{
            const product = new Novel(req.body);
            let result = await product.save();
            console.log(result);
            res.send(result); 
         }
      })      
   }
})

app.post("/upload",upload , async (req, res)=>{
     res.send("novel image uploaded");
})

app.delete("/delete", async (req, res)=>{
   const novelDelete = await Novel.remove();
   res.send({resukt:"All novels deleted"})  
})

app.delete("/delete/:id", async (req, res)=>{
    let result = await Novel.deleteOne({_id:req.params.id})
    res.send(result);
})

app.get("/novel/:id", async (req, res)=>{
   let result = await Novel.findOne({_id:req.params.id})
   res.send(result)
})

app.put("/novel/:id", async (req, res)=>{
   let result = await Novel.updateOne(
   {
      _id:req.params.id,   
   },
   {
      $set:req.body
   } 
   )
   res.send(result)
})

app.get("/search/:key", async (req, res)=>{
   let result = await Novel.find({
      "$or": [
         {novelName : {$regex: req.params.key}}
      ]
   })
   res.send(result)
})

app.listen(5000);
