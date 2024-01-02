const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;



async function test(fileName){
    const data = await fs.promises.readFile(`./files/${fileName}`,"utf-8");    
    console.log(data)
}
test("temp.txt")
function getFileNames(){
    folderPath = "./files"
    data = fs.readdirSync(folderPath);
    return data
}

app.get("/files",(req,res)=>{
    
    data = getFileNames()
    console.log(data)
    res.send(data) 
})

app.get("/file/:name",async (req,res)=>{
    fileName = req.params.name
    console.log(fileName)
    if(getFileNames().includes(fileName)){
        const data = await fs.promises.readFile(`./files/${fileName}`, 'utf-8');
        console.log(data)
        res.send(data) 
    }
    else{
        res.send("File not present") 
    }
app.get("/*",(req,res)=>{
    res.status(404).send("")
})
    
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })