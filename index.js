import express from "express"
import { apiRouting, helloRouting } from "./routes.js"


const App = express()
const port = 3000


App.get("/", (req, res)=>{
    res.sendStatus(200)
})
App.get("/hello", helloRouting)

App.get("/api/name", apiRouting)

App.listen(port, (req, res)=>{
    console.log(`makima is listening at port ${port}`)
})