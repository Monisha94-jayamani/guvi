const readline=require('readline');
const imp=readline.createInterface({
   input:process.stdin 
});
var user=[];
imp.on("line",(data)=>{
   user.push(data) 
});
imp.on("close",()=>{
   //console.log(user); 
   var n=user[0].split(" ");
//console.log(n);
   var b=[];
 //starting point
   for(var i=0;i<n.length;i++)
   {
      //ending point
      //console.log([n[i]]);
      b.push([parseInt(n[i])]);
       for(var j=i+1;j<n.length;j++)
       {
           //iterate the loop
           b.push([parseInt(n[i]),parseInt(n[j])]);
       // console.log([n[i],n[j]]);
           
       }
   }
  // console.log(b);
   var sum=0;
  
  for(var k=0;k<b.length;k++)
  {
     var t=b[k].toString().split(",");
    // console.log(t);
     for(m=0;m<t.length;m++)
     {
     sum+=parseInt(t[m]);
     
  }
  }
  console.log(sum);
 
});
 
