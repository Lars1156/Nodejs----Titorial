const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use( function(req, res,next){
    console.log("Middle--ware is running");
    next();
})

app.get ('/', (req,res, next ) =>{
    console.log('Hello server is running ');
    next();
} ,(req,res)=>{
   res.send(`<div>
   <h2>Welcome to Home Page</h2>
   <h5>This is Middle--Ware titorial</h5>
 </div>`);
});

app.put('/', (req, res) => {
    res.send("PUT Request Called")
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})