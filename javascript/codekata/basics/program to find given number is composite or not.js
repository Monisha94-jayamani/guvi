

const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  });
inp.on("close",()=>{
var c=0;
 for(var j=2;j<user;j++)
      {
        if(user%j==0)
        {
        c=1
          break;
        }
      }
  if(c==1)
    console.log('yes');
  else
    console.log('no');
});
          
  
