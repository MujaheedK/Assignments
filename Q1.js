function isPrime(n)
{
    if(n==1||n==0) 
    return false;

    for(var i=2;i<n;i++)
    {
        if(n%i==0)
        return false;
    }
    return true;
}

var N=50;
 for(var i=5;i<=N;i++)
{
    if(isPrime(i))
    {
        console.log(i);
    }
}