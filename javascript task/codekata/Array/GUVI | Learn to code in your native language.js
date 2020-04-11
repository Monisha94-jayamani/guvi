const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var n=user[0].split(" ");
  var l=parseInt(n[1])
  var a=user[1].split(" ");var c=[];
  for(var i=0;i<l;i++)
  {
    var f=a.shift();
    var p=a.push(f);
    f="";
    p="";
  }
  var res=a.join(" ");
  console.log(res);
});

    
