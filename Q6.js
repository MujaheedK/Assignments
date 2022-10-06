array=[2,3,4,5,6,7,8,9,10,11];
function questionSix(arr1){
    result=0;
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2==0)
    {
        result=result+arr1[i];
        }    
    }
    i(result == 0)
    {
        console.log("No Even numbers Found");
    }
    return result
}
console.log(questionSix(array));