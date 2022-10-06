String1='CITIUSTECH';
function questionEight(Str)
{
    vowelDict={'A':false,'E':false,'I':false,'O':false,'U':false}
    for(let i=0;i<Str.length;i++)
    {
        if(Str[i] in vowelDict)
        {
            vowelDict[Str[i]]=true;
        }
    }
    count=0;
    for(let key in vowelDict)
    {
        if(vowelDict[key]==true)
        {
            count=count+1;
        }
    }
    console.log(count);
}
questionEight(String1);