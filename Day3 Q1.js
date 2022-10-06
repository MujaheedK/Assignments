function loginInButton(){

    let myUsername = document.getElementbyId("Username").value;
    let myPassword = document.getElementbyId('password').value;
    let invalidMessage = document.getElementById('invalidmessage');

   if(myUsername == "Citiustech"  &&   myPassword == "Citiustech"){
        window.open("https://www.google.co.in/");
   }
   else{

    document.getElementById('invalidMesage').innerHTML="Invalid credentials";
   }
}