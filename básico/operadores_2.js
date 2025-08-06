import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite sua idade ', (input) => {
    const idade = Number(input);

    if(idade >= 18){
        console.log('Maior de idade');
    } else if (idade >= 0 ){
        console.log('Menor de idade');
    } else {
        console.log('idade inválida');
    }
    rl.close();
})