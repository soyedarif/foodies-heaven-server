const express= require('express')
const cors= require('cors')
const app=express()
const port=process.env.PORT || 5000;

app.use(cors())

const chefs=require('./data/chefs.json');
const recipies=require('./data/recipies.json')

app.get('/',(req,res)=>{
    res.send('kire dada')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/recipies',(req,res)=>{
    res.send(recipies)
})

app.listen(port)