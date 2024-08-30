const express=require("express")
const bodyparser=require("body-parser")
const db=require('./databaseConnection')

const app=express()
const cors=require("cors")
app.use(express.static(`${__dirname}/uploads`));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors())

const router=require("./Routes")
app.use("/",router)


app.listen(4000,()=>
{
    console.log("server started")
})