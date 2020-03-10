const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var n=[];
inp.on("line",(data)=>{
  n.push(data)
});
inp.on("close",()=>{
var  b=parseInt(n[0]);
  if(b%2==0)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
