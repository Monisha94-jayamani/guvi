
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
inp.on('close',()=>{
  var b=n[0].split(" ");
  var a=b[0];
  var c=b[1];
  var sum;
  sum=Math.pow(a,c);
  console.log(sum);
 
});
