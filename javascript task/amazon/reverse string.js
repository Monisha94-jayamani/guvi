const readline=require('readline');
const imp=readline.createInterface({
  input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
  user.push(data)
});
imp.on("close",()=>{
  var a=user[0].split("");var s=[];var d=[];
 
    for(var i=0;i<a.length;i++)
  {
    if(a[i]==" " || a[i]=="," || a[i]==":"|| a[i]=="-")
    {
      s.push(a[i] );
    }
    else
    {
    d.push(a[i]);
    }
  }
 
//  console.log(s.join(""));
  //console.log(a.join(""));
  
   var si=0;
  //console.log(s[si]);
  var di=d.length-1;
 for(var j=0;j<a.length;j++)
 {
     
   if(a[j] ==" "|| a[j] =="," || a[j]==":" || a[j]=="-")
   {
     a[j]=s[si];
     si++;
   }
   else
   {
     a[j]=d[di];
     di--;
   }
   
 }
 //console.log(a);
  console.log(a.join(""));
});
Sample Input :
A man, in the boat says : I see 1-2-3 in the sky
Sample Output :
y kse, ht ni3 21ee sIsy : a sta o-b-e ht nin amA
