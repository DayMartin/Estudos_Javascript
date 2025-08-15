import readLine from 'readline'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntar(){
    return new Promise((resolve) => {
        rl.question('Adivinhe o número que estou pensando de 0 a 10: ', (numero) => {
            resolve(Number(numero))
        })
    })
}

async function adivinhar(){

    // Variáveis
    const max = 10;
    let adivinhe = Math.floor(Math.random() * max)
    let numero = await perguntar();
    let tentativa = 5;

    // Bloco while
    while(numero !== adivinhe && tentativa > 0){
        tentativa = tentativa - 1
        if(tentativa === 0) break
        console.log(`Errou, tente novamente! Você tem ${tentativa} tentativas`)
        numero = await perguntar()
    }

    // Bloco IF
    if(tentativa === 0 && numero !== adivinhe){
        console.log(`Acabou suas chances! O número era ${adivinhe}`);
    } else (
        console.log('Você acertou o número era', adivinhe)
    )

    // Encerrar
    rl.close()
}

adivinhar()