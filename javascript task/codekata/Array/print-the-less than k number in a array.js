const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
var a,b,t;
var l=[];
var k=[];
var c=0;
var h;
var res;
inp.on('close',()=>{
  t=n[0].split(" ");
  a=parseInt(t[0]);
  b=parseInt(t[1]);
  l=n[1].split(" ");
  for(var i=0;i<l.length;i++)
  {   
      h=parseInt(l[i]);
    for(var j=0;j<l.length;j++)
    {
      if(h==parseInt(l[j]))
      {
        c++;
        //console.log(l[i],l[j]);
      }
    }
    if(parseInt(c)<parseInt(b))
    {
      k.push(l[i]);
      //console.log(c);
    }
    c=0;
  }
  res=k.sort();
  var s='';
  for(var i=0;i<res.length;i++)
  {
      s+=res[i]+' ';
  }
  console.log(s);
});
