require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router =require('./routes/router')
require('./db/connection')



const fdServer=express()
fdServer.use(cors())

fdServer.use(express.json())
fdServer.use(router)

const PORT=3000||process.env.PORT
fdServer.listen(PORT,()=>{
    console.log(`super hero server started at port :${PORT}`);
})
fdServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red;'>super hero server started,and waiting for client request...!!</h1>`)
})
