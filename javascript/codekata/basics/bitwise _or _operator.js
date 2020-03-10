

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
inp.on('close',()=>{
  var a=n[0];
  var b=n[1].split(" ");
  var sum=0;
  for(var i=0;i<b.length;i++)
  {
    sum!=b[i];
  }
  console.log(sum);
 
});
