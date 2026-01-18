import fetch from "node-fetch"

export const helloRouting = (req, res)=>{
     res.send("Custom message")
}

export const apiRouting = async (req, res)=>{
    const url = "https://www.usemodernfullstack.dev/api/v1/users"
    try{
        const response = await fetch(url)
        const data = await response.json()
        //checking if the code work
        console.log(data)
        res.json(data)
    }catch (error){
        console.error("error:", error)
    }
}