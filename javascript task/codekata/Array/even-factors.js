const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)
});
inp.on("close",()=>{
  var a=parseInt(n[0]);
  var c=0;
  var e=[];
  for(var i=1;i<=a;i++)
  {
    if(a%i==0 && i%2==0)
    {
      e.push(i);
      c=1;
    }
  }
  if(c==0)
    console.log("-1");
  else
    console.log(e.join(" "));
                });
  
