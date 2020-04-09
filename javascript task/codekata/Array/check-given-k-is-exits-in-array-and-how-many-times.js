const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
  t.push(data);
});
var n;
var k;
var l;
var j;
var c=0;
inp.on('close',()=>{
  j=t[0].split(" ");
  n=parseInt(j[0]);
  k=parseInt(j[1]);
  l=t[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    if(parseInt(l[i])==k)
    { 
      c++;
    }
  }
  if(c==0)
  {
    console.log("no");
  }
  else
  {
console.log("yes",c);
  }
});
