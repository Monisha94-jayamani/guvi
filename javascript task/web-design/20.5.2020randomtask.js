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
          var c=1;
   
      for(var i=1;i<=5;i++)
      {
      var b= Math.floor(Math.random() * 10); 
       //console.log("b",b);
       //console.log("a",a)
      var n=a.includes(b);
          if (n.toString()==="false")
            {
             a.push(b);
             //console.log(a);
            }
}
    var l=5-a.length;
   // console.log("l",l);
    function rad()
    {
       
         for(var p=0;p<l;p++)
         {
        var z=Math.floor(Math.random()*10);
        //console.log("kh");
        //console.log(z);
        var n2=a.includes(z);
        if(n2.toString()==="false")
        {
            a.push(z);
           
            
        }
     
     
        }
        
    }
rad()
l=5-a.length;
//console.log("end",l);
if(a.length!=5)
{
    rad()
    
}
   // console.log(a.join(""));
    return a.join("");
    }          
    
    </script>
   
</body>
</html>
