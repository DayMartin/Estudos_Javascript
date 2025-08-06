function break_teste(){
    for(let i = 1; i < 10; i++){
        if(i == 5 ){
            console.log('Chegou no 5')
            break;
        }
        console.log('i = ', i)
    }
}

function continue_teste(){
    // ele pula o valor da condição e continua o processo
    for(let o = 1; o < 5; o++){
        if(o === 3) {
            console.log('Pula o 3');
            continue;
        }
        console.log('Contando ', o)
    }
}

function impares(){
    for(let teste = 1; teste < 10; teste++){
        if(  teste % 2 === 0  ) {
            continue
        }
        console.log('Impar', teste)
        if( teste === 7) {
            break
        }
    }
}

//break_teste()
//continue_teste()
impares()