<!DOCTYPE html>
<html>
<head>
<title>Create a div and change the color onmouse over</title>
</head>
<body>

<script src="task1.js"></script>

</body>
//js for email validation javascripgt
</html>
var a=document.createElement("div");
var s=document.createTextNode("Email:");
a.appendChild(s); 
document.body.appendChild(a);

var x = document.createElement("INPUT");
x.id="m";
x.setAttribute("type", "text");
a.append(x);
document.body.appendChild(a);

var b=document.createElement("div");
b.id="img";
var c=document.createTextNode("Password:");
b.appendChild(c); 
document.body.appendChild(b);

var y= document.createElement("INPUT");
y.id="l";
y.setAttribute("type", "password");
b.append(y);
document.body.appendChild(b);



var z=document.createElement("button");
var d=document.createTextNode("submit");
z.append(d);
document.body.appendChild(z);


z.onclick=function(){
checkform()
};

function checkform(){

var emailvalue=document.getElementById("m").value;
var passwordvalue=document.getElementById("l").value;

 
    if(emailvalue == "") {
      alert("Error: email cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(passwordvalue)) {
      alert("Error: email 
must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }

    
      re = /[0-9]/;
      if(!re.test(passwordvalue)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(passwordvalue)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(passwordvalue)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }
     else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password: ");
    return true;
  
   

}

