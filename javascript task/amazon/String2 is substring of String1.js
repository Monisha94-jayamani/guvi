const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0];
  var b=user[1];
  var s=a.includes(b)
   if(s==true)
     {
     var res=b.split("");
     var l=a.split("");
     var f=res[0];
     var k=l.indexOf(f);
     console.log(k);
     }
  else
  {
    console.log("-1")
  }
});
