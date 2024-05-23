const express = require('express');
const  app =  express();

const port = 4004;

app.get('/',(req,res)=>{
    res.send(`<div>
   <h2>Welcome to Home Page</h2>
   <h5>This is Middle--Ware titorial</h5>
 </div>`);
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});
