import readLine from "readline";

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

async function descobrir(){
    const max = 10
    let adivinhe = Math.floor(Math.random() * max)
    let tentativas = 5

    let resposta = await perguntar()

    while(resposta !== adivinhe && tentativas > 0){
        tentativas = tentativas - 1

        if(tentativas === 0){
            console.log('Acabou suas chances')
            break
        }else{
            console.log('Errou, tente novamente')
            resposta = await perguntar()
        }
    }

    if(resposta === adivinhe && tentativas > 0) {
        console.log(`Você acertou, o número é `, adivinhe)
    }

    rl.close()

}

descobrir()