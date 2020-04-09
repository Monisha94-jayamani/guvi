const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
var t;
var l=[];
var res=[];
var c=0;
inp.on('close',()=>{
  t=parseInt(n[0]);
  l=n[1].split(" ");
  for(var i=0;i<l.length;i++)
  {
    if(parseInt(l[i])==parseInt(i))
    {  c=1;
      res.push(parseInt(l[i]));
    }
  }
  var k=[];
  var s='';
 // console.log(res);
       k=res.sort();
      // console.log(k);
     for(var i=0;i<k.length;i++)
     {
         s+=k[i]+' '; 
       
     }
  if(c==1)
     console.log(s);
  else
    console.log("-1");
});
