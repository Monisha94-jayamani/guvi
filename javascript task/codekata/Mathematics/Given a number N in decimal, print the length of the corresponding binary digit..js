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
  var res=a.toString(2);
  //console.log(res);
  var c=res.length;
  console.log(c);
});
