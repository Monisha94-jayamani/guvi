const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
  t.push(data);
});
var n;
var l;
var l1;
var j;
var c=0;
inp.on('close',()=>{
   n=parseInt(t[0]);
   l=t[1].split(" ");
   l1=t[2].split(" ");
   j=parseInt(l1.length);
   //console.log(j);
for(var i=0;i<l.length;i++)
{ 
  if(parseInt(l[i])==parseInt(l1[--j]))
     {
       c++;
       //console.log(l[i],l[j]);
     }
} 
if(c==n)
console.log("yes");
else
console.log("no");

//console.log(c);
});
