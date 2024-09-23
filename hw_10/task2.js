async function fetchTodo(idNumber){
    let url = `https://jsonplaceholder.typicode.com/todos/${idNumber}`;
    return fetch(url).then(response => response.json())
    .catch(error => console.error('Error fetching user:', error));
}


async function fetchUsers(idNumber){
    let url = `https://jsonplaceholder.typicode.com/users/${idNumber}`;
    return fetch(url).then(response => response.json())
    .catch(error => console.error('Error fetching user:', error));
}

const promiseAllResult = Promise.all([fetchTodo(1), fetchUsers(1)])
.then((result) => {
    return result
  })
  .catch(error => console.error('Error in Promise.all:', error));

  console.log(promiseAllResult)


  const promiseRaseResult = Promise.race([fetchTodo(1), fetchUsers(1)])
    .then((result) => {
        return result
    })
    .catch(error => console.error('Error in Promise.race:', error))

    console.log(promiseRaseResult)