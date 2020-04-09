const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split(" ");
  var b=parseInt(a[0]);
  var c=parseInt(a[1]);
  var n=1;
  //console.log(b,c);
  for(var i=b;i>=1;i--)
  {   
      //console.log(i);
      n*=i;
  }
 // console.log(n);
  var d=0
  d=b-c;
  //console.log(n);
  //console.log(d);
  var m=1;
  for(var j=d;j>=1;j--)
  {
      m*=j;
  }
  var p=1;
  for(var k=c;k>=1;k--)
  {
      p*=k
  }
 // console.log(m);
  var res=n/(p*m);
  console.log(res);
});
