let fact=num =>{
    let factorial=1;
    while(num>1)
{
    factorial=factorial*num;
    num--;
}
return factorial;
}
console.log(fact(6));