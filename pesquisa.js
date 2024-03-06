const chalk = require ('chalk');
const inquirer = require ('inquirer');

//função principal que executa
function main() {
    console.log("Olá");
    console.log(chalk.bgRed.white('Bem vindo ao questionário!'));

    //Perguntar ao usuário seu nome
    inquirer.prompt({
        name: 'name',
        message: 'Qual é seu nome?'
    })

    //Promisse - Javascript
    .then((nomeResponder) => {
        //Pergunta ao usuario sua idade
        return inquirer.prompt({
            name:'age',
            message: 'Quantos anos você tem?'
        })
        .then((idadeResponder) => {
            //imprimir mensagem na tela 
            console.log(chalk.bgRed.black(`Olá ${nomeResponder.name}! você tem ${idadeResponder.age} anos!`))
        })
    })

}

main();