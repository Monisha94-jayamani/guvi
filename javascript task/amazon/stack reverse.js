You are provided with a string ‘s’. Your task is to reverse the string using stack Data Structure.
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data);
});
var res=[];
inp.on("close",()=>{
  var a=user[0].toString().split(" ");
 // console.log(a);
  
  for(var i=a.length-1;i>=0;i--)
  {
     res.push(a[i]); 
  }
  console.log(res.join(" "));
});
Sample Input :
i am jsb
Sample Output :
jsb am i
