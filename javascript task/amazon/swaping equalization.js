const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
const user=[];
imp.on("line",(data)=>{
  user.push(data);
});
imp.on("close",()=>{
    
  var a=parseInt(user[0]);
  var b=user[1].split(" ");
  var c=user[2].split(" ");
  var l1=0,l2=0;var count=0;
  for(var i=0;i<b.length;i++)
  { 
      l1=0;
      l2=0;
     
    for(var j=0;j<c.length;j++)
    {
        
      b[i]=parseInt(b[i])+parseInt(c[j]);
      c[j]=parseInt(b[i])-parseInt(c[j]);
      b[i]=parseInt(b[i])-parseInt(c[j]);
     
      for(var k=0;k<a;k++)
      {
        l1+=parseInt(b[k]);
        l2+=parseInt(c[k]);
      }
     
      if(l1==l2)
      {
        count=1;
        break;
      }
    }
    if(count==1)
    {
      console.log("yes");
      break;
    }
  }
  if(count==0)
  {
    console.log("no");
  }
});
      
