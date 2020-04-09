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
  var a=user[0].split("");
  var c=0;
  for(var i=0;i<a.length;i++)
  {
    if(parseInt(a[i])%2 !=0)
    {
      c+=parseInt(a[i]);
    }
  }
//  console.log(c);
  if(c%2==0)
  {
    console.log("E");
  }
  else
  {
    console.log("O");
  }
});

  
  
