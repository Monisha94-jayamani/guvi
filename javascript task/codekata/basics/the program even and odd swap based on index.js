const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  var s=data;
  var swap="";
  for(i=1;i<s.length;i=i+2)
  {
    for(j=i-1;j<s.length;j=j+2)
    {
      swap+=s[i]+s[j];
      break;
    }
    
  }
  
    console.log(swap);
});
	
