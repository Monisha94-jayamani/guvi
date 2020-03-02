#count prime number between range

const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[0].split(" ");
  var B=parseInt(A[0]);
  var C=parseInt(A[1]);
  var c=0;
  for(i=B;i<=C;i++)
  {
    var count=0;
    for(j=1;j<=i;j++)
    {
      if(i%j==0)
      {
        count=count+1;
      }
    }
    if(count==2)
    {
      c=c+1;
    }
  }
  console.log(c);
});
