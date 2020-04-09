const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>
{
  user.push(data);
});
inp.on("close",()=>{
  var a=parseInt(user[0]);
  var c=1;
  for(var j=a;j>=1;j--)
  {
    c*=j;
  }
  console.log(parseInt(c));
});
