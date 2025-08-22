// Imports
import readLine from 'readline'

// Construtor do readLine
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função pergunta
function pergunta(){
    // Promise
    return new Promise((resolve) => {
    // Pergunta com readline
        rl.question('Qual número estou pensando de 0 a 20 ', (numero) => {
            resolve(Number(numero))
        })
    })
}

// Função base
async function base(){
    // Variaveis
    const max = 2;
    let adivinhe = Math.floor(Math.random() * max)
    let numero = await pergunta();
    let tentativas = 5

    // Bloco while
    while(adivinhe !== numero && tentativas > 0){
        tentativas = tentativas - 1
        if(tentativas === 0) break
        console.log(`Errou, tente novamente! Você tem ${tentativas} tentativas `)
        numero = await pergunta()

    }

    // Bloco IF
    if(tentativas === 0 && adivinhe !== numero){
        console.log('Acabou suas chances')
    }else(
        console.log(`Parabéns, você acertou! O número é ${adivinhe}`)
    )

    // Fechar conexão
    rl.close()


}

// Chamar função base
base()