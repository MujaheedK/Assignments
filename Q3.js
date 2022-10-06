function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
let String ="Mujaheed";
let result=reverseString(String);
document.write("reverse string is:"+result);