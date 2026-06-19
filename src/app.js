const express = require('express');

const app = express();




app.use("/test",(req,res)=>{
    res.send('Hello World');
})

app.use("/hello", (req,res)=>{
    res.send('Hello from hello route');
})

app.use("/", (req,res)=>{
    res.send('Hello from root route');
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})