array =['Rohit','Kohli','Shikhar','Bhuvi','Ponting'];

function questionNine(arr1)
{
    for(let i=0;i<arr1.length;i++)
    {
        arr1[i]=arr1[i].slice(0,arr1[i].length-1) + arr1[i].slice(arr1[i].length-1).toUpperCase();
    }
    document.write(arr1);
}
questionNine(array);