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
  var s=n.toString(2);
  console.log(s);
});
