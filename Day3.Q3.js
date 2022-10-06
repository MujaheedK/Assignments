function addEmailId(){

    let textField = document.createElement("input");
    textField.setAttribute("type","email");
    document.body.appendChild(textField);
    textField.placeholder="Enter your Email";

    let removeEmailbutton = document.createElement("input");
    removeEmailbutton.setAttribute("type","button");
    removeEmailbutton.value = "Remove Email";
    document.body.appendChild(removeEmailbut);

    removeEmailbutton.onclck=function(){
        document.body.removeChild(textField);
        document.body.removeChild(removeEmailbutton);
    }
}