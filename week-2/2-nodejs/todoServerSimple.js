const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); //used for accepting req.body data in json format

var todoNewId = 0;
var todos = {};

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
  res.send(todos[todoNewId]).status(201);
})

app.put('/todo/:id', (req, res) => {
  // console.log(req.params)
  if(todos[req.params.id]){
    var {todoTitle, todoDesc}  = {...req.body};
    todos[req.params.id] = {'title':todoTitle, 'desc':todoDesc};
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