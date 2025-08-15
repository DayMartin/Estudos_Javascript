import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


function perguntar() {
    return new Promise((resolve) => {
        rl.question('Adivinhe qual número estou pensando ', (numero) => {
            resolve(Number(numero))
        }) 
    })
}

async function Adivinhar() {
    let max = 20;
    const adivinhe = Math.floor(Math.random() * max)
        for(let numero = await perguntar(); numero !== adivinhe; numero = await perguntar()){
            console.log('Errou, tente novamente')
        }

    console.log(`Você acertou, o número é ${adivinhe}`);
    rl.close()
}

Adivinhar()