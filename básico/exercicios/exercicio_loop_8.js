function contador(){
    for(let n = 10; n >= 0; n = n - 1){
        setTimeout(() => {
            console.log(`Contagem regressiva`, n)
        }, (10 - n) * 1000)
    }
}

contador()