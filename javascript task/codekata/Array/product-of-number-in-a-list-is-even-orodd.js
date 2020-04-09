const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
var t;
var res=1;
var l=[];
inp.on('close',()=>{
  t=parseInt(n[0]);
  l=n[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
   res=res*l[i];
  }
  if(res%2==0)
    console.log("even");
  else
    console.log("odd");
});
