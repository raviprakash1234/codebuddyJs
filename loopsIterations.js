// level {1/2/3}
//level 1

for(let i = 1; i<=4; i++){
    let res = " "
    for(let j = 1; j<=4-i; i++){
        res += ""
    }
    for(let k = 1; k<=i; k++){
        res += k+" "
        console.log(res)
    }
    
}