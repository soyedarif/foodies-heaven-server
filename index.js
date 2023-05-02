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

app.get('/chefs/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const chef=chefs.find(c=>c.id===id)
    res.send(chef)
})

app.get('/recipies',(req,res)=>{
    res.send(recipies)
})

app.get('/recipies/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const recipy=recipies.filter(r=>r.id===id)
    res.send(recipy)
})

app.listen(port)