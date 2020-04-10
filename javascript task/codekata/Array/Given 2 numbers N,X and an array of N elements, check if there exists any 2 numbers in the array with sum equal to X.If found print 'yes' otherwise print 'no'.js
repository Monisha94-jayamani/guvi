const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const user=[];
inp.on('line',(data)=>{
  user.push(data);
});
inp.on('close',()=>{
 var a=user[0].split(" ");
 var N=parseInt(a[0]);
  var K=parseInt(a[1])
  var b=user[1].split(" ");
  var s=0;
  for(var i=0;i<b.length;i++)
  {
      for(var j=i+1;j<b.length;j++)
      {
    if((parseInt(b[i]))+(parseInt(b[j]))==K)
       {
       s=1;
       console.log("yes");
       break;
  }
}
}
 if(s==0)
{
  console.log("no");
}
  });
