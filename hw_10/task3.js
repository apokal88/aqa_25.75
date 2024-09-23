async function fetchTodo(idNumber) {
    try {
    let result = await fatch(`https://jsonplaceholder.typicode.com/todos/${idNumber}`);
    let data = result.json()
    return data
    } catch (err) {
        console.log(err)
    } 
}

async function fetchUsers(idNumber) {
    try {
    let result = await fatch(`https://jsonplaceholder.typicode.com/users/${idNumber}`);
    let data = result.json()
    return data
    } catch (err) {
        console.log(err)
    } 
}