const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
  var s=n[0].split(" ");
  var a=s[0];
  var b=s[1];
if(a=='R' && b=='P')
    console.log('P');
else if(a=='R'&& b=='S')
    console.log('R');
else if(a=='S'&& b=='P')
    console.log('S');
 else
    console.log('D');
});
