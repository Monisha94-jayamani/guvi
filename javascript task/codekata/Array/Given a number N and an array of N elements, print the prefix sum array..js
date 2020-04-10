const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const user=[];
inp.on('line',(data)=>{
  user.push(data);
});
inp.on('close',()=>{
 var N=parseInt(user[0]);
  var A=user[1].split(" ");
  var f=parseInt(A[0]);
  var c=[];
  var s=0;
  c.push(f);
  for(var i=1;i<A.length;i++)
  {
    for(var j=i-1;j<c.length;j++)
    {
      s=parseInt(A[i])+parseInt(c[j]);
      c.push(parseInt(s));
      break;
    }
    s=0;
  }
  //console.log(c);
  console.log(c.join(" "));
  });
