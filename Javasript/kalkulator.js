let no1=document.getElementById("no1");
let no2=document.getElementById("no2");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let kali=document.getElementById("kali");
let bagi=document.getElementById("bagi");   
let result = document.getElementById("result");
function plus1(){
    let a = parseInt(no1.value);
    let b = parseInt(no2.value);
    
    let result1 = a + b;
    result.innerHTML = "Result :" + result1;
}
function plus2(){
    let a = parseInt(no1.value);
    let b = parseInt(no2.value);
    
    let result2 = a - b;
    result.innerHTML = "Result :" + result2;
}
function plus3(){
    let a = parseInt(no1.value);
    let b = parseInt(no2.value);
    
    let result3 = a * b;
    result.innerHTML = "Result :" + result3;
}
function plus4(){
    let a = parseInt(no1.value);
    let b = parseInt(no2.value);
    
    let result4 = a / b;
    result.innerHTML = "Result :" + result4;
}
plus.onclick=plus1;
minus.onclick=plus2;
kali.onclick=plus3;
bagi.onclick=plus4;
