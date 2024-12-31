const a =1, b=2, c=3

const obj1 = {a:a, b:b, c:c}
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nomeAtri = 'nota'
const valorAtri = 7

const obj3 ={

}

obj3[nomeAtri] = valorAtri
console.log(obj3)

const obj4 = {[nomeAtri]: valorAtri}
console.log(obj4)

const obj5 = {
    função1: function(){
        //...
    },
    função2(){
        //...
    }
}
console.log(obj5)