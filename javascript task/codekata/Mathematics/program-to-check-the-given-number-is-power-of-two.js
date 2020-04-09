const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
var n=parseInt(user[0]);
  if(n && (n & (n - 1)) === 0)
  {
    console.log("yes");
}
else
{
  console.log("no");
}
});
