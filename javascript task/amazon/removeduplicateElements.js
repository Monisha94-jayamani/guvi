const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split("");
  var v=[];
  var c;
  for(var i=0;i<a.length;i=i+c)
  {
    if(a[i]!=a[i+1])
       {
         v.push(a[i]);
         c=1;
       }
       else
       {
           c=2;
       }
  }
  console.log(v.join(""));
});
