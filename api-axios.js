//import
const http = require ('http');
const axios = require ('axios');

// Função para lidar com as requisições
const requestMain = (request, response) => {
    //URL da api que queremos acessar
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    //Fazendo uma requisição HTTP GET com API
    axios.get(apiUrl)
        .then ((apiResponse) => {
            //configurando o cabeçalho da resposta
            response.writeHead(200, {'Content-Type': 'text/plain'});

            //Exibindo os dados retornados na resposta
            response.end(`${JSON.stringify(apiResponse.data)}`)

        })
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })


} 

//Criando o servidor
const server = http.createServer(requestMain);

//Definindo a porta 
const PORT = 3000;

//Iniciando servidor e ouvindo a porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});