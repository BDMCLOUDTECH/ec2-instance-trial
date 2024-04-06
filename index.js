const express = require("express")
const app = express()

app.route('/',(req,res)=>{
res.send("App is running")
})

app.listen(5050,()=>{
    console.log("app is running")
})