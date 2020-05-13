const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split(" ");
  var s=a[0].split("");
  var n=parseInt(a[1]);
  for(var i=1;i<=n;i++)
  {
    var p=s.pop();
    s.unshift(p);
    }
console.log(s.join(""));
});
    
