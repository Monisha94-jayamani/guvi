const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
  t.push(data)
});
var a;
var l;
var m=[];
c=1;
inp.on('close',()=>{
  a=t[0];
  l=t[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    c=1;
    for(var j=i+1;j<l.length;j++)
    {
    if(parseInt(l[i])==parseInt(l[j]))
    {
      c=c+1;
    }
  }
    m.push(c);
    //console.log(m);
  }
  var max;
  max=m.sort();
  console.log(max[max.length-1]);
 
});
      
  
  
