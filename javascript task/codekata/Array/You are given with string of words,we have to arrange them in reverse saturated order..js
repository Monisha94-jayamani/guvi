const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const user=[];
inp.on('line',(data)=>{
  user.push(data);
});
inp.on('close',()=>{
  var s=user[0].split(" ");
  var k=""; var c=[];
  for(var i=0;i<s.length;i++)
  {
    var f=s[i].split("");
    for(var j=f.length-1;j>=0;j--)
    {
      k+=f[j];
    }
    c.push(k);
    k="";
    f=[];
  }
  console.log(c.join(" "));
});
      
