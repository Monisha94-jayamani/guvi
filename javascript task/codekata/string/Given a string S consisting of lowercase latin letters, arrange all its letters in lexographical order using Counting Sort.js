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
  var b=user[1].split("");
  var c=b.sort();
  var res=c.join("");
  console.log(res);
});
  
