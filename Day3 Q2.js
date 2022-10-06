document.getElementById('username').addEventListener('click',function(){
    let username = document.getElementById('username').Value;
    let invalidMessage = document.getElementById('invalidMessage');
for(let i = 0;i<username.length;i++){
    if(username.charAt(i)==" " || username.toLowercase()!="Citiustech"){
       invalidMessage.innerHTML="invalid credentials";
}
else{
    invalidMessage.innerHTML=" ";
}
}
})

document.getElementById('password').addEventListener('click',function(){
    let password = document.getElementById('password').Value;
    let invalidMessage = document.getElementById('invalidMessage1');
for(let i = 0;i<password.length;i++){
    if(password.charAt(i)==" " || password.toLowercase()!="Citiustech"){
       invalidMessage.innerHTML="invalid credentials";
}
else{
    invalidMessage.innerHTML=" ";
}
}
})


document.getElementById('username').addEventListener('focusout',function(){
    let username = document.getElementById('username').Value;
    if(username.length>2){
        document.getElementById('button').disabled = false;
    }

})

function loginButton(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;


    let invalidMessage = document.getElementById('invalidMessage');
    let invalidMessage1 = document.getElementById('invalidMessage1');


    if(username.toLowercase() == "citiustech" && password.toLowercase() == "citiustech")
    {
        window.open('https://www.google.co.in/')
    }
    else{
        invalidMessage.innerHTML="Invalid credentials";
    }
}
