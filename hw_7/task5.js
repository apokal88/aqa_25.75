const firstArray = [1, 2, 3, 4 ,5];
const secondArray = ["one", "two", "three", "four", "five"];
const thirdArrty = [];

for (let i = 0; i < firstArray.length; i++) {
    thirdArrty.push(firstArray[i]);
}

for (let i = 0; i < secondArray.length; i++) {
    thirdArrty.push(secondArray[i]);
}

console.log(thirdArrty);