const myfilter=(array,callback)=>{
   var new1=[];
    for(let i=0;i<array.length;i++)
    {
       if(callback(array[i]))
       {
           new1.push(array[i]);
       }
    }
return new1
}    
const checkingcondition=(x)=> x<3
const inp=[1,2,3]
console.log(myfilter(inp,checkingcondition));
