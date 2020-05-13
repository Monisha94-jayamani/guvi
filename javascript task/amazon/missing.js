const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});var user=[];
imp.on("line",(data)=>{
user.push(data)
});
imp.on("close",()=>{
  var N=parseInt(user[0]);
  var a=user[1].split(" ");var c=0,v=[];
  for(var i=1;i<=N;i++)
  {  
    c=0;
     var j=parseInt(i);
    for(var k=0;k<a.length;k++)
    {
      if(j==parseInt(a[k]))
         {
           c=c+1;
           break;
         }
    }
    if(c==0)
    {
      v.push(j);
    }
  }
 
  console.log(v.join(" "));
              });
  
      
