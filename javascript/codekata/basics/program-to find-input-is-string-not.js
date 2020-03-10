const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var n=[];
inp.on("line",(data)=>{
  n.push(data)
});
inp.on("close",()=>{
var c=0;
var user=[];
user=n[0].split("");
  for(var i=0;i<user.length;i++)
  {
    if(user[i]>0 && user[i]<9)
    {
      c=1;
      break;
    }
  }
  if(c==1)
  {
    console.log("yes");
  }
  else
     {
    console.log("no");
     }
});
