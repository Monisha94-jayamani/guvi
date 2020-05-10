

const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
    user.push(data)
})
imp.on("close",()=>{
 var a=parseInt(user[0]);
  var b=user[1].split(" ").reverse().join(" ");
  console.log(b);
  
});

Sample Input :
6
1 2 3 4 5 6
Sample Output :
6 5 4 3 2 1
