import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function semana(){
    rl.question('Digite um número: ', (numero) => {
        switch (numero) {
            case "1":
                console.log('Segunda')
                break
            case '2':
                console.log('Terça')
                break
            case '3': 
                console.log('Quarta')
                break
            case '4':
                console.log('Quinta')
                break
            case '5':
                console.log('Sexta')
                break
            case '6':
                console.log('Sábado')
                break
            case '7': 
                console.log('Domingo')
                break
            default: 
                console.log('Número inválido. Somente do 1 ao 7')
        }
        rl.close()
    })
}

function nota(){
    rl.question('Digite sua nota: ', (nota) => {
        switch(nota){
            case 'A':
                console.log("Excelente")
                break
            case 'B': 
                console.log('Muito bom')
                break
            case 'C': 
                console.log('Estude mais')
                break
            case 'D':
                console.log('Isso está bem ruim')
                break
            case 'F':
                console.log('Você reprovou')
                break
            default: 
                console.log('Nota indisponível')
        }
        rl.close()
    })
}
nota()
//semana()