

const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
    user.push(data)
})
imp.on("close",()=>{
  var str1=user[0];
  var a=str1.split("");var c=[];
  for(var i=0;i<a.length;i++)
  {
    for(var j=i+1;j<a.length;j++)
    {
      if(a[i]==a[j])
      {
       var b= str1.substr(i,j+1);
        c.push(b);
        b="";
        break;
      }
    }
  }
  //console.log(c);
  var p=[];
  for(var k=0;k<c.length;k++)
  {
      var o=c[k].split();
      var r=c[k].split("").reverse().join("");
      //console.log(r);
      //console.log("hi");
      //console.log(o,r);
      if(o==r)
      {
          p.push(o);
          o="";
          r="";
         
      }
  }
  //console.log(p);
 
  var s=p.sort();var l=[]
  for(var m=0;m<s.length;m++)
  {
      //console.log(s[m]);
      var n=s[m].toString();
      //console.log(n.length);
      l.push(parseInt(n.length));
      n="";
  }
  //console.log(l);
  var max_of_array = Math.max.apply(Math,l);
  //console.log(max_of_array);
  var f=l.indexOf(max_of_array);
  //console.log("hi");
  console.log(p[f].toString());
});

