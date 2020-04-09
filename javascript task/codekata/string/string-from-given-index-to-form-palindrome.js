const readline=require('readline')
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split("");
  var n1=parseInt(user[1]);
  //console.log(a);
  //console.log(n1);
  var s="";
  var r="";
  for(var i=2;i<=n1+1;i++)
  {
    var n=user[i].split(" ");
    var b=parseInt(n[0]);
    var c=parseInt(n[1]);
    for(var j=b-1;j<c;j++)
    {
       s+=a[j];
    }
    var p=s;
    //console.log(s);
    //console.log(p);
    for(var k=s.length-1;k>=0;k--)
    {
      
      r+=s[k];
    }
    //console.log(p);
    //console.log(r)
    if(p==r)
    {
      console.log("YES");
    }
    else
    {
      console.log("NO");
    }
    p="";
    s="";
    r="";
  }
  
  });
