const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var t=[];
inp.on('line',(data)=>{
 t.push(data);
});
var d;
var n;
var k;
var l=[];
var c=0;
inp.on('close',()=>{
  d=t[0].split(" ");
  n=d[0];
  k=d[1];
  l=t[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    if(parseInt(l[i])<parseInt(l[i+1]))
    {
      c++;
    }
  }
  //console.log(c);
  if(c==l.length-1)
    console.log("Yes");
  else
    console.log("No");
});
