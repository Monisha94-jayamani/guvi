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
  var res=1;
  for(var i=a;i>=1;i--)
  {
    res*=i;
    //console.log(i);
  }
  console.log(res);
});
