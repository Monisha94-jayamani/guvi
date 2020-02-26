<!DOCTYPE html>
<html>
<head>
<title>Create a div and change the color onmouse over</title>
</head>
<body>

<script src="task1.js"></script>

</body>
</html>
///////js document
var x = document.createElement("div"); 
x.id="img";
x.style.color="red";
var t = document.createTextNode("Paragraph is created."); 
x.appendChild(t);
document.body.appendChild(x); 
document.getElementById("img").onmouseover = function() {
mouseOver()
};
function mouseOver() {
  document.getElementById("img").style.color = "blue";
}
