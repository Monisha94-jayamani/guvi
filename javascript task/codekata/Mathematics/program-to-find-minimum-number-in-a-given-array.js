const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=parseInt(user[0]);
  var b=user[1].split(" ");
  var temp=b[0];
  for(var i=0;i<b.length;i++)
  {
      for(var j=i+1;j<b.length;j++)
      {
    if(parseInt(b[i]) < parseInt(b[j]))
    {
      temp=b[i]
    }
  }
  }
  console.log(parseInt(temp));
});
 
