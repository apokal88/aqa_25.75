const handleEven = (n) => {
    if (n % 2 === 0){
        console.log("number is even");
    }
  }

  const handleOdd = (n) => {
    if (n % 2 !== 0){
        console.log("number is odd");
    }
  }
  
 let handleNum = (number, handleEven, handleOdd) => {
    handleEven(number);
    handleOdd(number);
 }
 handleNum(3,handleEven, handleOdd);
 