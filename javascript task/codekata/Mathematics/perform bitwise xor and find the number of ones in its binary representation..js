const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var n=user[0].split(" ");
  var a=parseInt(n[0]);
  var b=parseInt(n[1]);
  var res=a^b;
  var c=res.toString(2);
  var d=c.split("");
  var count=0;
  for(var i=0;i<c.length;i++)
  {
      if(c[i]=="1")
      {
          count+=1;
      }
  }
  console.log(count);
});
