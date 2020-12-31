import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import routes from './routes'

/**
 * Mongodb Connection
 * 
*/
mongoose.Promise = global.Promise
const dbURL = 'mongodb+srv://admin:admin@cluster0.0r1vk.mongodb.net/sistemafacturaciondb?retryWrites=true&w=majority'
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log("Connected to Mongodb on port 27017..."))
        .catch(console.error)

const app = express()

/**
 * Use Definitions
 * 
 */
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

/**
 * Set Definitions
 */
app.set('port',process.env.PORT || 3000)

/**
 * Routes
 * 
*/
app.use('/api',routes)
/**
 * TODO Controller
 * 
*/
app.get('/hello',(req,res)=>{
    res.send("Hello World...")
})

app.listen(app.get('port'),()=> {
    console.log(`Server is running on port ${app.get('port')}`)
})