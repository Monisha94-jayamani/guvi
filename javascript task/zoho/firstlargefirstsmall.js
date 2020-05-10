const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
    var res=[];
  var b=parseInt(user[0]);
  var arr=user[1].split(" ");
  
  //console.log(b);
  //console.log(arr);
 var c=arr.sort(function(a,b){
     return a-b;
 });
//console.log("as",c);
 var d=[]
  for(var j=c.length-1;j>=0;j--)
  {
      d.push(c[j]);
  }
  //console.log("des",d);
 //var l=d.length;
  var h=parseInt(b/2);
  if(b%2!=0)
 {
     h=h+1;
 }
//console.log("h",h); 
 for(var i=0;i<h;i++)
 {
     res.push(parseInt(d[i]),parseInt(c[i]));
   
 }
 //console.log(res);
 var u= [...new Set(res)];
 console.log(u.join(" "));
});

  //i/p and o/p
  Sample Input :
5 1 7 11 16 19
Sample Output :
19 1 16 7 11
