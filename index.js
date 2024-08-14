let arr=[1,14,2,5,9];
function srt(a,b){
    return a-b;
}
// arr.sort(srt);
[a,b,...rest]=arr
console.log(a);
console.log(b);
console.log(rest);