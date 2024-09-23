const car1 = {
    brand : "Audi",
    model : "Q7",
    year : 2024
}

const car2 = {
    brand : "Porsche",
    model : "911",
    owner : 2023
}

const car3 = {...car1, ...car2};
console.log(car3);