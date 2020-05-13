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
  var k=parseInt(a[1]);
  var b=user[1].split(" ");
  b.sort(function(a,b)
         {
    return a-b;
  });
 
   if(parseInt(a[0])>=parseInt(a[1]))
    {
      console.log(parseInt(b[b.length-k]));
    }
});
