import  express from  'express'
import IndexDB  from './src/DB/IndexDB.js'
import cors from  'cors'
import "dotenv/config";
import connectCloudinary from './src/Cloudinary/Cloudinay.js';

//imports of routes
import RouteSongs from './src/Routes/SongRoute.js'

const app  = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())
// app.use(express.static())

//routes
app.use('/api/Songs',RouteSongs)




IndexDB().then(()=>{
    //cloudinary
connectCloudinary()
    app.get("/",(req,res)=>{
        res.send("hello")
    })
    app.listen(port,(req,res)=>{
        console.log(`server is running on port ${port}`)
    })
}).catch(()=>{
    console.log('the error occured in the indexDB')
    process.exit(1)
})

