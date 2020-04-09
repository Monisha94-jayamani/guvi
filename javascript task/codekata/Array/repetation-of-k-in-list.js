const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
  t.push(data)
});
var n;
var a;
var k;
var l;
c=-1;
inp.on('close',()=>{
  a=t[0].split(" ");
  n=a[0];
  k=a[1];
  l=t[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    if(l[i]==k)
    {
      c++
    }
  }
    if(c==-1)
    {
      console.log("-1");
    }
    else
    { 
      console.log(c);
    }
});
      
  
