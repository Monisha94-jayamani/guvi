const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var s=user[0].split(" ");
  var A=parseInt(s[0]);
  var B=parseInt(s[1]);
  var C=parseInt(s[2]);
  if( A!=B && B!=C && C!=A)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
 
