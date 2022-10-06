function filterFunction (inputArray, func){
    resultArray = [];
    for (let i=0; i<inputArray.length;i++) {
        if (func(inputArray[i])){
            resultArray.push(inputArray[i]);
        }
    }
    console.log(resultArray);
}

inputArray = [1,2,4,35,56,78,57,69,75,81];
console.log(`Input Array is:$(inputArray)`)

console.log('Odd Numbers in the input array are: ')
filterFunction(inputArray, x => x % 2 !=0);

console.log('Even Numbers in the input array are: ')
filterFunction(inputArray, x => x % 2 ==0);

console.log('prime Numbers in the input array are: ')
filterFunction(inputArray, x => {
    if(x<=1){
        return false
    }

    for(let i=2;i<x;i++){
        if(x%i==0){
            return false
        }
    }
    return true
});






