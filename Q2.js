let rev=0;
let num=547484;
let LastDigit;

while(num!=0)
{
    LastDigit=num%10;
    rev=rev*10+LastDigit;
    num=Math.floor(num/10);
}
document.write("reverse number:"+ rev);