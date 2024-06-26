/*
Let and Var

*/
function VarFunction(){
    console.log(x);//undefined
    var x=10;
    console.log(x);//10

    function h1() {
        // var hh="Hello";
        console.log(x);//10
    }
    // console.log(hh);
    h1()
}
function LetFUnction() {
    // console.log(x);//undefined
    let x=10;
    console.log(x);//10

    function h1() {
        let hh="Hello";
        console.log(hh);//10
    }
    // console.log(hh);
    h1()
}
// VarFunction()
// LetFUnction()

// Simple Function
function greet(){
    console.log("HEllo Rohit ")
}
// greet()
// Function with Parameters
function mult(n1,n2){
    console.log(n1*n2)
}
// mult(5,20)
// Variable asign function
let square=function (n1){
    return n1*n1;
}
// var s=square(5)
// console.log(s)
// Arrow Function
let greet1=()=>{
    console.log("Hello Wrold");
};
// const l=greet1;
// console.log(l);

// String in JavaScript
// concatination 
function conctatination(str,str2) {
    console.log( str+" "+str2)
}
var str1='Hello'
var str2="World"
// conctatination(str1,str2)

// TypeOf Operator

function TypeOf_Function(p1,p2,p3) {
    console.log(typeof(p1))
    console.log(typeof(p2))
    console.log(typeof(p3))
}
// TypeOf_Function(5,"Hello",null)
function hi() {
    alert('Hello USER !')
}
// var h1=document.getElementById('btn1');
// console.log(h1)
function fun1() {
    alert('Add to Bag Button get clicked !');
}

function fun2() {
    alert('Wishlist Button get clicked ');
}
