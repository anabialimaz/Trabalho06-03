const chalk = require('chalk');
const inquirer = require('inquirer');

//funçaõ para somar dois números 
function somarNumeros(num1,num2){
    return num1 + num2;
}

function main(){
    console.log(chalk.bgRed.white('Olá, seja ben-vindo'));

    // Perguntar ao usuario dois números
    inquirer.prompt([
        {
            name:'numero1',
            message:'Digite o primeiro número:'
        },
        {
            name:'numero2',
            message:'Digite o segundo número:'
        }
    ])

    // Promise = Javascript
    .then((resposta) => {
        //Converter os números para valores númericos
        const numero1 = Number (resposta.numero1);
        const numero2 = Number (resposta.numero2);

        //calcular soma
        const resultado = somarNumeros(numero1, numero2);


        // Imprimir
        console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é ${resultado}`));

    })
}




main();