const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
   var b=user[0].split("");
  var c=0;
  for(var i=0;i<b.length;i++)
  {
    for(var j=i+1;j<b.length;j++)
    {
      if(b[i]==b[j])
      {
        c=1;
        break;
      }
     }
    if(c==1)
    {
      console.log("yes");
    }
    break;
  }
  if(c==0)
  {
    console.log("no");
  }
  });
     
