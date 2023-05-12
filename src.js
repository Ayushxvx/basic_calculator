console.log("good morning")
console.log(2+2-5)
console.log("fuck wadhera's renthouse people")
document.getElementsByClassName("btn").onclick=function(){
    event.preventDefault();
}
let value;
function setvalue(num){
    event.preventDefault();
    document.getElementById("input").value=document.getElementById("input").value + num;
}
document.getElementById("plus").onclick=function(){
    event.preventDefault();
    document.getElementById("input").value=document.getElementById("input").value + "+";
    console.log("plus");
}
document.getElementById("divide").onclick=function(){
    event.preventDefault();
    document.getElementById("input").value=document.getElementById("input").value + '/';
}
document.getElementById("mul").onclick=function(){
    event.preventDefault();
    document.getElementById("input").value=document.getElementById("input").value + '*';
}
document.getElementById("minus").onclick=function(){
    event.preventDefault();
    document.getElementById("input").value=document.getElementById("input").value + '-';
}

function answer(){
    event.preventDefault();
    document.getElementById("input").value=eval(document.getElementById("input").value);
}
function clearscr()
{
    event.preventDefault();
    document.getElementById("input").value="";
}