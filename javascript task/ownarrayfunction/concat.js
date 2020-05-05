const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
  var s1=n[0];
  var s2=n[1].split(" ");
  var s;
    function concat1(){
      for(var i=0;i<s2.length;i++)
      {
          s1+=s2[i];
      }
      
      return s1;
  }
  var res=concat1();
  console.log(res);
  
});
//output
hi 
good bye
op:higoodbye
    
    
    
