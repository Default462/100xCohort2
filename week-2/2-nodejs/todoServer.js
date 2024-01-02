const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;
app.use(express.json()); //used for accepting req.body data in json format


let todos = {}
let todoNewId=0
async function readJsonFile(filePath) {
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading or parsing the JSON file:', error);
    throw error;
  }
}
(async () => {
  const filePath = './todoServer.json'; // Replace with the actual path
  try {
    const jsonData = await readJsonFile(filePath);
    console.log(jsonData);
    // Access specific properties if needed
    todoNewId = jsonData.todoNewId;
    todos = jsonData.data;
    console.log('todoNewId:', todoNewId);
    // console.log('data:', data);
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
})();
  



function updateTodo(data, newId) {  
  data = JSON.stringify(
    {
      "todoNewId":newId,
      "data":data  
    });
  fs.writeFile("./todoServer.json", data , "utf-8", (err, todaData) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  })
}

app.get('/todos', (req, res) => {
  res.send(todos).status(200);
})

app.get('/todo/:id', (req, res) => {
  // console.log(req.params)
  if(todos[req.params.id]){
    res.send(todos[req.params.id]).status(200);
  }else{
    res.json("Not Found").status(404);
  }  
})

app.post('/todos', (req, res) => {
  var {todoTitle, todoDesc}  = {...req.body};
  // console.log(todoTitle, todoDesc)
  todoNewId++;
  todos[todoNewId] = {'title':todoTitle, 'desc':todoDesc};
  updateTodo(todos, todoNewId);
  res.send(todos[todoNewId]).status(201);
})

app.put('/todo/:id', (req, res) => {
  // console.log(req.params)

  if(todos[req.params.id]){
    var {todoTitle, todoDesc}  = {...req.body};
    todos[req.params.id] = {'title':todoTitle, 'desc':todoDesc};
    updateTodo(todos,todoNewId)
    res.send(todos[req.params.id]).status(200);
  }else{
    res.send("Not Found").status(404);
  }  
})

app.delete('/todo/:id', (req, res) => {
  // console.log(req.params)
  if(todos[req.params.id]){    
    delete todos[req.params.id]; 
    res.send("Deleted Successfully").status(404);   
  }else{
    res.send("Not Found").status(404);
  }  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})