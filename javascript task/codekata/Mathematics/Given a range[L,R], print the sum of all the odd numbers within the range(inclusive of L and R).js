const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var n=user[0].split(" ");
  var a=parseInt(n[0]);
  var b=parseInt(n[1]);
  var s=0;
  var res=0;
  for(var i=a;i<=b;i++)
  {
    if(i%2==0)
    {
      s=0;
    }
    else
    {
      res+=i;
    }
  }
  console.log(res);
});
