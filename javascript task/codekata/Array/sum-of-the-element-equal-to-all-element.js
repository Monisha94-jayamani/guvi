const inp=readline.createInterface({
  input:process.stdin
});
const p=[];
inp.on('line',(data)=>{
  p.push(data);
});
var n;
var x;
var l;
var d;
var c=0;
inp.on('close',()=>{
  d=p[0].split(" ");
  n=parseInt(d[0]);
  x=parseInt(d[1]);
  l=p[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    for(var j=i+1;j<l.length;j++)
    {
      if(parseInt(l[i])+parseInt(l[j])==x)
      {
        c=1;
        break;
      }
    }
  }
    if(c==1)
      console.log("yes");
    else
      console.log("no");
  });
  sum-of-
