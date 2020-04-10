const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
var t,k;
var l,l1;
var s='';
inp.on('close',()=>{
  t=parseInt(n[0]);
  l=n[1].split("");
  l2=n[2].split("");
  for(var i=0;i<l.length;i++)
  {
      if(l[i]==l2[i])
      {    s+=l[i];
      }
     else
     {
         break;
     }
  }
  console.log(s);
});
