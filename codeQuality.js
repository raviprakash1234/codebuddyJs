// level {1/2/3}
//level 1

async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data  = response.json()
    console.log(data)
}

getData()