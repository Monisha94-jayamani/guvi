const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
  var s=n[0];
  var r='';
  for(var i=1;i<s.length;i=i+2)
  {
      for(var j=i-1;j<s.length;j=j+2)
      {
          r+=s[i]+s[j];
          break;
      }
  }
  console.log(r);
});
