import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
})

function calculadora() {
    rl.question('Digite um número ', (number) => {
        rl.question('Digite outro número ', (number2) => {
            rl.question('Qual operadora você deseja utilizar? \n 1.Soma \n 2.Subtração \n 3.Divisão \n 4.Multiplicação ', (operador) => {
                const a = Number(number);
                const b = Number(number2);
                const op = Number(operador);

                if(op === 1){
                    console.log('Resultado da soma é de: ', a + b)
                } else if(op === 2) {
                    console.log('Resultado da subtração é de: ', a - b)
                } else if (op === 3) {
                    console.log('Resultado da divisão é de: ', a / b)
                } else if (op === 4) {
                    console.log('Resultado da multiplicação é de: ', a * b)
                } else {
                    console.log('Valor inválido');
                }

            rl.close();
            })
        })
    })
}

calculadora();