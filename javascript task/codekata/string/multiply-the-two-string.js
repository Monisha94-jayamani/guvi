const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split(" ");
  var n=parseInt(a[0]);
  var m=parseInt(a[1]);
  var ans=n*m;
  console.log(ans);
});
