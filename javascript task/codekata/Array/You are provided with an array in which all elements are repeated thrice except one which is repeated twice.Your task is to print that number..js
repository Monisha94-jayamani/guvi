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
var k=[];
var c=0;
var h=[];
var f=[];
var res=[];
inp.on('close',()=>{
  t=parseInt(n[0]);
  l=n[1].split(" ");
  for(var i=0;i<l.length;i++)
  {   c=0;
      f=parseInt(l[i]);
    for(var j=0;j<l.length;j++)
    {
      if(f==parseInt(l[j]))
      {
        c++;
      }
    }
      k.push(c);
      h.push(l[i]);
    }
    console.log(k);
    console.log(h);
    var m=0;
   for(var i=0;i<k.length;i++)
   {
     if(k[i]==2)
     {
       res.push(h[i]);
     }
   }
   var unique;
    var s='';
   unique=[...new Set(res)];
     s+=unique;
   console.log(s);
  
});
    
