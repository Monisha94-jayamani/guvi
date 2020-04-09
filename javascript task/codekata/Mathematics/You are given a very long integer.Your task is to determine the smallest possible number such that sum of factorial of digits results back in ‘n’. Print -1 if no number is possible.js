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
  var n=a.toString().split("");
  //console.log("hello");
  var s=n.sort();
  //console.log(s);
  var c=1;
  var res=0;
  for(var i=0;i<s.length;i++)
  {
    for(var j=parseInt(n[i]);j>=1;j--)
    {
      c*=j;
    }
    res+=c;
    //console.log(res);
    c=1;
  }
  if(res===parseInt(a))
  {
    console.log(parseInt(a));
  }
  else
  {
    console.log("-1");
  }
  
});
