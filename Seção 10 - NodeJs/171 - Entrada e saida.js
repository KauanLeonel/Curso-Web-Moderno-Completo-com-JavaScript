//O process utiliza dados de entrada e saída

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)    

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //Ele vai pegar o que foi digitado
        const nome = data.toString().replace('\r\n','') //Substitui o enter por nada

        process.stdout.write(`Fala ${nome} !\n `)
        process.exit()
    })
}
