const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
inp.on('close',()=>{
  var b=n[0];
  var a=n[1].split(" ");
 // console.log(a);
  for(i=0;i<a.length-1;i=i+2)
  {
      var t=a[i];
      a[i]=a[i+1];
      a[i+1]=t;
  }
  var s='';
  for(var j=0;j<a.length;j++)
  {
      s+=a[j]+" ";
  }
  console.log(s);
});
