// const express = require('express')

import express from 'express'
import dotenv from 'dotenv'

dotenv.config() // loaf .en first 
const app = express();
const apple = "apple"
console.log(apple)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Auth service is running on ${PORT}`)
})
 