const users = [
    {
        name : "Michael",
        email : "airjordan@gmail.com",
        age : 61
    },
    {
        name : "Joanne",
        email : "jkrowling@gmail.com",
        age : 59
    },
    {
        name : "Jackie",
        email : "jackiechan@gmail.com",
        age : 70
    }
]

for (const element of users) {
    console.log(element);
}

for (const element of users) {
    if(element.age >= 60){
        element.status = "reteired";
    } else {
        element.status = "still avaliable";
    }
    console.log(element);
}