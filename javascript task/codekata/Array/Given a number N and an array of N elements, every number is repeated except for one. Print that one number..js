const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const user=[];
inp.on('line',(data)=>{
  user.push(data);
});
inp.on('close',()=>{
 var a=parseInt(user[0]);
 var b=user[1].split(" ");
  var count=0;var c=[];
 for(var i=0;i<a;i++)
 {
   for(var j=i+1;j<a;j++)
   {
     if(parseInt(b[i])== parseInt(b[j]))
     {
       count+=1;
       break;
     }
   }
   if(count==0)
   {
     c.push(parseInt(b[i]));
   }
   count=1;
 }
 console.log(c.join(" "));
   
});
      
