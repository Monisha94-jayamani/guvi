
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
  var s=n[0].split(" ");
  var t=parseInt(s[0]);
  for(var i=1;i<s.length;i++)
  {
    if(t>parseInt(s[i]))
    {
      t=s[i];
    }
  }
  console.log(t);
  });
