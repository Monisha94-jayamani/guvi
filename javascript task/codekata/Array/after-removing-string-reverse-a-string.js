onst readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
 t.push(data);
});
var s=[];
var p='';
var res=[];
inp.on('close',()=>{
  s=t[0].split("");
  //console.log(s);
  for(var i=s.length-1;i>=0;i--)
  {
      if(!(s[i]=='a'||s[i]=='i'||s[i]=='e'||s[i]=='o'||s[i]=='u'||s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U'))
      {   p+=s[i];
          res.push(s[i]);
      }
  }
  console.log(p);
  
});

  

  
  
  
  
