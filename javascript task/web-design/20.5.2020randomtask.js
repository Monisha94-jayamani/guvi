 (45 sloc)  1.41 KB
 
<!DOCTYPE html>
<html>
    <head>
        <title>random task using js</title>
    </head>
    <body id="inside">
        <script>
            var body=document.getElementById("inside");
            var a=document.createElement("h4");
            a.innerHTML="Random Number Generator using 5 digits"
            a.style.marginLeft="509px"
            body.appendChild(a);
            var b=document.createElement("button");
            b.innerHTML="Click me"
            b.style.color="white";
            b.style.backgroundColor="blue";
            b.setAttribute("id","btn");
            b.style.marginLeft="589px"
            body.appendChild(b);
            var c=document.createElement("h4");
            c.style.color="red";
            c.setAttribute("id","l");
            c.style.marginLeft="596px"
            body.appendChild(c);
            document.getElementById("btn").onclick=function random(){
              
           
           
                console.log("kojds");
                var a=[];
   
   for(var i=a.length;i<=5;i++)
   {
       var r=Math.floor(Math.random()*10);
       var n=a.includes(r);
      // console.log(n,r);
       if(n.toString()=="false")
       {
           
           a.push(r);
           //console.log(a);
           i=a.length;
       }
       i=a.length;
   }
  
            document.getElementById("l").innerHTML=a.join("");
           }
        
            </script>

    </body>
</html>
