import readLine from 'readline'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


function perguntar(){
    return new Promise((resolve) => {
        rl.question('Adivinhe qual número estou pensando de 0 a 20 ', (numero) => {
            resolve(Number(numero))
        })
    })
}

async function adivinhar(){
    const max = 20;
    let adivinhe = Math.floor(Math.random() * max);
    let numero;

    do{
        numero = await perguntar()
        if(numero !== adivinhe){
            console.log('Errou, tente novamente! ')
        }
    }while(numero !== adivinhe)

    console.log(`Acertou, o número é ${adivinhe}`)
    rl.close()
}

adivinhar()