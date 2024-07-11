import  express from  'express'
import IndexDB  from './src/DB/IndexDB.js'

const PORT   = 4000
const app  = express()



IndexDB().then(()=>{
    app.get("/",(req,res)=>{

        res.send("hello")
    })
    
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(()=>{
    console.log('the error occured in the indexDB')
    process.exit(1)
})

