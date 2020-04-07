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
  var b=user[1].toString().split(" ");
 // console.log(b);
  var c=[];
  var d=[];
  for(var i=0;i<a;i++)
  {
    for(var j=i+1;j<a;j++)
    {
        //console.log(b[i],b[j]);
      if(b[i]==b[j])
      {
      
        c.push(b[i],b[j])
        break;
      }
    }
  }
//console.log(c);
 var s1=b.length;
 //console.log(s1);
 var s2=c.length;
// console.log(s2);
 var res=s1-s2;
 console.log(res);

 
});
