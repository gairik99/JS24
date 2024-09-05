let arr=[1,14,2,5,9];
function srt(a,b){
    return a-b;
}
// arr.sort(srt);
[a,b,...rest]=arr
console.log(a);
console.log(b);
console.log(rest);
// let readlineSync=require("readline-sync");
// let school=readlineSync.question();
// let obj={
//     name:"gk",
//     age:40,
//     [school]:"not available"
// }
// console.log(obj);
// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// let user1=new User('gairik',69);
// console.log(user1);

function greet(){
    return 'welcome to hell';
}


function helper(name,param){
    console.log(name,param())
}

helper("gairik",greet);