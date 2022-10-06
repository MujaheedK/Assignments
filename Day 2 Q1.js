function factorial(num){
    var result=num;
    if(num===0 || num===1)
    return console.log("factorial of given number : 1");
    while(num>1){
        num--;
        result*=num;
    }
    return console.log(`Factorial of the given number is:${(result)}`);
}
factorial(5);