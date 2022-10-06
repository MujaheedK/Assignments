const arr1 = [1,2,3,4,5,6,7,8,9,10];
const prime = arr1.filter(num =>{
    for(let i=2; i<num; i++){
        if(num % i==0)
        return false;
    }
    return num !==1;

});
console.log(prime);