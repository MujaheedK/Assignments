let array=[10,20,30,40,50,60,70,80,90,100];
for(let i=0;i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++)
    {
        let temp=0;
        if(array[i]<=array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[i]=temp;
        }
    }
}
document.write(array);