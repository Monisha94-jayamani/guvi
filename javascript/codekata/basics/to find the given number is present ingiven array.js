
deebika kishore
12:32 PM (0 minutes ago)
to me

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
inp.on('close',()=>{
  var a=n[0].split(" ");
  var b=a[0];
  var k=a[1];
  var c=0;
  var d=n[1].toString().split(" ");
  for(var i=0;i<d.length;i++)
  {
    if(d[i]==k)
    {
      c=1;
    }
  }
  if(c==1)
    console.log("yes");
  else
    console.log("no");
 
     }):
