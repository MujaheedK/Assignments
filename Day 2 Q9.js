function maximumValue(arg1,arg2,arg3)
{
    if(arg1>arg2 && arg1>arg3)
    {
        return console.log("The maximumnumber is:"+arg1);
    }

    else if(arg2>arg1 && arg2>arg3)
    {
        return console.log("The maximumnumber is:"+arg2);
    }
    else{
        return console.log("The maximumnumber is:"+arg3);
    }
}
maximumValue(123,234,345);

