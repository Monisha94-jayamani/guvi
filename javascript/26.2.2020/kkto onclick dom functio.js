<!DOCTYPE html>
<html>
<head>
<title>Create a div and change the color onmouse over</title>
</head>
<body>

<script src="task1.js"></script>

</body>
</html>
//js file
var x = document.createElement("div"); 
x.id="c";
x.style.color="red";
var t = document.createTextNode("Paragraph is one."); 
x.appendChild(t);
document.body.appendChild(x); 

var y=document.createElement("div");
y.id="d";
y.style.color="blue";
var k=document.createTextNode("paragraph two");
y.appendChild(k);
document.body.appendChild(y); 

var z=document.createElement("button");
z.id="e";
var b=document.createTextNode("click me");
z.appendChild(b);
document.body.appendChild(z);


z.onclick=function(){
o()
};

function o(){
var tmp = document.getElementById("c").innerHTML;
document.getElementById("c").innerHTML=document.getElementById("d").innerHTML;
document.getElementById("d").innerHTML =tmp;
