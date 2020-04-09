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
  var s="";
  
  for(var i=1;i<=a;i=i*3)
  {
    s+=i+" ";
  }
  console.log(s);
});
