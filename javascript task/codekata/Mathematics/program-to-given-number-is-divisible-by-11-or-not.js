const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>
{
  user.push(data);
});
inp.on("close",()=>{
  var a=parseInt(user[0])
  if(a%11==0)
  {
    console.log("YES");
  }
  else
  {
    console.log("NO");
  }
});

  
  
