const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {


    var sum=0;
for(var i=1;i<=data;i++)
{
  
  sum=sum+i;
}
  console.log(sum);
});
	
