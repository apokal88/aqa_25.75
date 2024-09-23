function calculateRectangleArea (width , height) {
    return width * height;
}
console.log(calculateRectangleArea(5,10));


let currentRectangleArea = function expressionFunctionCalculateRectangleArea (width , height) {
    return width * height;
}
console.log(currentRectangleArea(5,10));


const arrowFunctionCalculateRectangleArea = (width , height) => {
    return width * height;
}
console.log(arrowFunctionCalculateRectangleArea(5,10));