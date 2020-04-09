const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
var t;
var l=[];
var res=[];
var c=1;
inp.on('close',()=>{
  l=n[0].split("");
  t=parseInt((l.length)/2)
  for(var i=0;i<l.length;i++)
  {
    if(i!=t)
    {
      res.push(l[i]);
    }
    else
    {
      res.push("*");
  }
      
  }
  var s='';
 for(var i=0;i<res.length;i++)
 {
     s+=res[i];
 }
 
 console.log(s); 
});
