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
var c=0;
var res=[];
inp.on('close',()=>{
  t=parseInt(n[0]);
  l=n[1].split(" ");
  var k;
  for(var i=0;i<l.length;i++)
  {  k=l[i];
   for(var j=i+1;j<l.length;j++)
   {
     if(parseInt(k)==parseInt(l[j]))
        {
           c=1;
           res.push(k);
        }
   }
}
//console.log(res);
var unique;
unique=[...new Set(res)];
var res1=unique.sort();
//console.log(res1);
var s='';
for(var i=0;i<res1.length;i++)
{
    s+=res1[i]+' ';
}if(c==1)
console.log(s);
  else
    console.log("unique");
    
});
  
