const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
var a=[];
var b=[];
var c=[];
var d=[];
var e=[];
const user=[];
inp.on('line',(data)=>{
    user.push(data);
   
});
var n;
var q;
var l=[];
inp.on('close',()=>{
    a=user[0].split(" ");
    console.log(a);
    b=user[1].split(" ");
    console.log(b);
    n=a[0];
    q=a[1];
    var s;
    console.log(n,q);
    /*c=user[2].split(" ");
    d=user[3].split(" ");
    e=user[4].split(" ");
    console.log(c,d,e);
    var u;
    u=c[0];
    var v;
    v=c[1];*/
    for(var i=2;i<=i+q;i++)
    {
      var m=user[i].split(" ");
      u=m[0];
      v=m[1];
    for(var j=u;j<=v;j++)});
    {
        l.push(b[j]);
    }
    console.log(l);
   
    s=l.sort();
    console.log(s[0]);
    u=0;
    v=0;
    l=[];
    }
   });
