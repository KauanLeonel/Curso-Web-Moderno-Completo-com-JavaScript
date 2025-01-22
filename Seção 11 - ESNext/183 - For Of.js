//Ele faz o for por valores

for(let letra of "Cod3r"){
    console.log(letra)
}

const assunstosEcma = ["Map", 'Set', 'Promisse']

for (let i in assunstosEcma){ //Vai pelo indice
    console.log(i)
}

for (let i of assunstosEcma){ //Vai pelo valor
    console.log(i)
}

const assunstosMap = new Map([
    ['Map', {abordado: true}],
    ["Set", {abordado: true}],
    ["Promisse", {abordado: false}]
])

for (let assunto of assunstosMap){
    console.log(assunto)
}

for (let chave of assunstosMap.keys()){
    console.log(chave)
}

for (let valor of assunstosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assunstosMap.entries()){
    console.log(ch, vl) //Para ver a chave e o valor
}

const s = new Set(['A', "b", 'C']) //O set recebe um array  
for (let letra of s){
    console.log(letra)
}