var array=[10,20,30,40,50,60,70,80,90,100];
var first=0;
var second=0;
for(var i=0;i<array.length;i++){
    var current=array[i];
    if(first<current){
        second=first;
        first=current;
    }
    else if (second<cuurent){
        second=current;
    }
}
document.write("array:"+array,"</br>");
document.write("first greatest number is:"+first,"</br>");
document.write("second greatest number is:"+second,"</br>");