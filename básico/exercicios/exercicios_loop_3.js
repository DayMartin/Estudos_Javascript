import readLine from 'readline';

const rl =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntar() {
    return new Promise((resolve) => {
        rl.question("Qual número estou pensando de 0 a 20: ", (numero) => {
            resolve(Number(numero))
        })
    })
}

async function adivinhar(){
    const max = 20;
    let adivinhe =  Math.floor(Math.random() * max)
    let numero = await perguntar();

    while(numero !== adivinhe){
        console.log('Tente novamente')
        numero = await perguntar()
    }

    console.log('Acertou o número é: ', adivinhe)
    rl.close()
}

adivinhar()