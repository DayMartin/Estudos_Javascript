import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite um número ', (number) => {
    rl.question('Digite outro número ', (number2) => {

        const a = Number(number);
        const b = Number(number2);

        console.log('Soma: ', a + b);
        console.log('Subtração: ', a - b);
        console.log('Divisão', a / b);
        console.log('Multiplicação', a * b);

    rl.close();
    })
})

