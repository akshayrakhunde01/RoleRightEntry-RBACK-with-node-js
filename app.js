import express from 'express'

const app=express()


app.use(express.json());

app.use(express.urlencoded({extend:true}))

const PORT = process.env.PORT || 4000

app.get('/health',(request,response)=>{
    try {
        response.status(200).send('Good health')
    } catch (error) {
        response.status(500).send('intrnal server error:',error.message)
    }
})


app.listen(PORT,()=>{
    console.log(` server is working on port`)
})