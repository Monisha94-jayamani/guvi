const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on('close',()=>{
   var s1=n[0].split(" ");
  var s=[];
    function concat1(){
      for(var i=0;i<s1.length;i++)
      {
         if(s1[i]>5)
         {
             s.push(s1[i]);
         }
      }
      return s.join(" ");
    }
    var res=concat1();
    console.log(res);
   
     
});
//output
1 2 60 50 40
60 50 40 

    
    
    
