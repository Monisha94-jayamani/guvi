
document.getElementById("C").addEventListener("click",clear);
document.getElementById("2").addEventListener("click",equation);
document.getElementById("3").addEventListener("click",equation);
document.getElementById("4").addEventListener("click",equation);
document.getElementById("5").addEventListener("click",equation);
document.getElementById("6").addEventListener("click",equation);
document.getElementById("7").addEventListener("click",equation);
document.getElementById("8").addEventListener("click",equation);
document.getElementById("9").addEventListener("click",equation);
document.getElementById("0").addEventListener("click",equation);
document.getElementById("+").addEventListener("click",equation);
document.getElementById("-").addEventListener("click",equation);
document.getElementById("/").addEventListener("click",equation);
document.getElementById("*").addEventListener("click",equation);
document.getElementById("1").addEventListener("click",equation);
document.getElementById(".").addEventListener("click",equation);
document.getElementById("=").addEventListener("click",equal);
function clear()
{
document.getElementById("result").value="";
}
function equation()
{
var a=this.value;
document.getElementById("result").value+=a;
}
function equal()
{
var b=document.getElementById("result").value;
var c=eval(b);
document.getElementById("result").value=c;
}
