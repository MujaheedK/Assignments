function countRepeatingDigit(N){
    var result=0;
    var cnt=Array(10).fill(0);
    while(N>0){
        var rem=N%10;
        cnt[rem]++;
        N=Math.floor(N/10);
    }
    for(var i=0;i<10;i++){
        if(cnt[i]>1){
            result++
        }
    }
    return result;
}
var N=7312140905;
document.write(countRepeatingDigit(N));