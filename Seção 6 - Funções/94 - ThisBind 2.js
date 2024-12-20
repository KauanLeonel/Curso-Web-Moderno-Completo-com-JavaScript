// O this vai pegar o objeto dele, no exemplo de baixo, ele vai pegar o obj que ele está inserido

function pessoa(){
    this.idade = 0;

    setInterval(function(){ //Função do próprio JS que é realizada a partir de um tempo definido
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)  // Sem o bind(this) ele pegaria o idade do setInterval (que não existe)
}

new pessoa

function pessoa(){
    this.idade = 0;
    const self = this // Caso não queira usar o bind(this), é possível definir uma const que sirva para ele
    setInterval(function(){ //Função do próprio JS que é realizada a partir de um tempo definido
        self.idade++
        console.log(self.idade)
    },1000)  // Sem o bind(this) ele pegaria o idade do setInterval (que não existe)
}

new pessoa