// level {1/2/3}
//level 1


//1
let number1 = [1,2,3]

var res = [...number1,4].splice(1)

console.log(res)


//2
let number2  = [1,2,3]

let sum =  number2[0]+number2[1]+number2[2]
// let sum = number2.reduce((ac, curr)=>{
//     return ac+curr
// })

console.log(sum)


//3

let object =  {
    name: 'Elie', 
    rank: 'Pro',
    print:function(){
        console.log(`"name:${this.name} rank:${this.rank}"`)
    }
}

object.print()
