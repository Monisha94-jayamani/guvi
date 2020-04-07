const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=parseInt(user[0]);
  var b=user[1].toString().split(" ");
 // console.log(b);
  var c=[];
  var d=[];
  for(var i=0;i<a;i++)
  {
    for(var j=i+1;j<a;j++)
    {
      if(b[i]==b[j])
      {
         
        c.push(b[i],b[j])
        break;
      }
    }
  }
  
 for(var k=0;k<a;k++)
  {
    for(var q=i+1;q<a;q++)
    {
      if(b[k]!=c[q])
      {
         
        d.push(b[k])
        break;
      }
    }
  }
 
 console.log(d.length);
 
});
