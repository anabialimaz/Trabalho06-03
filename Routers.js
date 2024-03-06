const express = require('express');
const axios = require ('axios');
const app = express();
const PORT = 3000;
 
app.use(express.json());
 
 
//rota do meu index
 
app.get('/', async(req, res)=>{
  res.send('Bem-Vindo!')
})
 
 
 
//rota dos "posts"
app.get('/posts', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/posts')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error:'Não foi possível acessar a API'});
    }
});
 
//rota dos "comments"
 
app.get('/comments', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/comments')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Não foi possível acessar a API'})
    }
})
 
 
//rota dos "albums"
 
app.get('/albums', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/albums')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Não foi possível acessar a API'});
    }
});
 
 
//rota das "photos"
 
app.get('/photos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/photos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Não foi possível acessar a API'});
    }
});
 
//rota de "todos"
 
app.get('/todos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/todos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Não foi possível acessar a API'});
    }
});
 
 
//rota dos "users"
 
app.get('/users', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Não foi possível acessar a API'});
    }
});
 
 
// inciando o meu servidor
 
app.listen(PORT, () =>{
    console.log(`acesse o servidor na porta http://localhost:${PORT}`);
})