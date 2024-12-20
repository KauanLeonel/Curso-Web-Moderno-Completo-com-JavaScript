function pessoa (){
    this.idade = 0;

    setInterval(() => { // Ela não buga pq é uma função arrow   
        this.idade++
        console.log(this.idade)
    }, 1000)

    }

new pessoa