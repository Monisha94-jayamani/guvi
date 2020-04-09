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
  var A=parseInt(n[0]);
  var B=parseInt(n[1]);
   var m=1;
  for(var i=A;i>=1;i--)
  {
    m*=i;
  }
  var n=1;
  for(var j=B;j>=1;j--)
  {
    n*=j;
  }
  var res=m/n;
  console.log(res);
});
