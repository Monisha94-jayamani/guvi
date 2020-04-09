const readline=require("readline");
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
       user.push(data)
});
inp.on("close",()=>{
       var a=user[0];
var count=0;
 var b=user[1].split(" ");
     var c=user[2];
for(var i=0;i<b.length;i++)
{
  if(b[i]==c)
  {
     count=1;
    break;
  }
}
if(count==0)
{
  console.log("no");
}
else
{
  console.log("yes");
}
});
