const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
var a=parseInt(user[0]);
var b=user[1].split(" ");
  var d=[];
   var c;
   var n=-1;
for(var i=0;i<b.length;i++)
{
  var t=parseInt(b[i]);
   c=0;
  for(var j=i+1;j<b.length;j++)
  {
    if(t>parseInt(b[j]))
    {
      c=1
      d.push(parseInt(b[j]));
      break;
    }
  }
  if(c==0)
  {
    d.push(n);
  }
}
  console.log(d.join(" "));
  //console.log(typeof(n));
});
//7 3 3 2 1 -1 -1
  
