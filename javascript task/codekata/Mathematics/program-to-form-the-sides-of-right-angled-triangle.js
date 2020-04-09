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
  var C=parseInt(n[2]);
  if(A+B<=C || B+C<=A || C+A<=B)
  {
    console.log("no");
  }
  else
  {
    console.log("yes");
  }
});
 
