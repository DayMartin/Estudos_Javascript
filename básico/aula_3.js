/* 

do...while: Faça primeiro, cheque depois.
while: Cheque antes de fazer. 
for outra maneira de fazer o while

*/

function incrimento() {
    let numero = 1;

    while(numero < 5){
        console.log('Número: ', numero)
        numero++
    }
}

function decremento() {
    let numero2 = 5;
    while(numero2 != 1){
        console.log('Número', numero2)
        numero2 = numero2 - 1
    }
}

function alternativa_for(){
    // define a variavel com o valor
    // condição
    // o que fazer enquanto a condição for false
    for(let i = 1; i <= 5; i++){
        console.log('For', i)
    }
}

function alternativa_do_whilte(){
    let numero3 = 0;

    // execute pelo menos 1 vez mesmo que o valor de while seja false
    do {
        console.log('Somando ', numero3);
        numero3++
    } while(numero3 <= 0) 
}

//incrimento()
//decremento()
//alternativa_for()
alternativa_do_whilte()