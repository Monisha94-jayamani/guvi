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
  for(var i=0;i<l.length;i++)
  { 
    if((parseInt(l[i]%2))==1)
  {  c=0;
    res.push(l[i]);
  }
  }var s='';
   for(var i=0;i<res.length;i++)
   {
     s+=res[i]+' ';
   } if(c==1)
     console.log("-1");
     else
      console.log(s);
});
