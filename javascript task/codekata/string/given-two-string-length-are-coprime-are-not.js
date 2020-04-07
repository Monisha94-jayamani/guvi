const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
var a=user.toString().split(" ");
var b=a[0].length;
var c=a[1].length;
  var coprime;
  for(var i=1;i<=b;i++)
  {
    if(b%i ==0 && c%i ==0)
    {
      coprime=i;
      //console.log(coprime);
    }
  }
  if(coprime == 1)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
