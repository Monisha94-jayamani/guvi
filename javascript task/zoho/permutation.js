
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const user=[];
inp.on('line',(data)=>{
    user.push(data);
});
inp.on('close',()=>{
  var a=user[0].split("");
  var res=[];
  for(var i=0;i<a.length;i++)
  {
    var b=a[i];
    var s=a.slice(0,i)+a.slice(i+1,a.length);
    var c=s.split(",").join("");
   var f=b+c;
   //console.log(f);
   res.push(f);
     for(var j=0;j<c.length-1;j++)
     {
       var l=c.split("");
       //console.log("l",l);
       var p=l.pop();
       //console.log("pop",p);
       //console.log(l);
        l.unshift(p)
       //console.log("latest",l);
       v=b+l.join("");
       //console.log(v);
       res.push(v);
     }
  }
  //console.log(res);
  for(var k=0;k<res.length;k++)
  {
      console.log(res[k]);
  }
});









