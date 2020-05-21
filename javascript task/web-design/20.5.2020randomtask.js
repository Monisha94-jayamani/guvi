<!DOCTYPE html>
<head>
    <title>random task 20.5.2020</title>
</head>
<body>
    <center> <h2>FIXED 5 DIGITS RANDOM NUMBER GENERATOR </h2></center> 
   <center> <button type="button" onclick="getElementById('result').innerHTML=randomtask()" style="background-color:blue;color:white">CLICK ME!</button></center>
    <center><h3 style="color:red" id="result"></h3></center>
    <script>
       

    function randomtask()
    {
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
           
console.log(a.join(""));
    return a.join("");
    }          
    
    </script>
   
</body>
</html>
