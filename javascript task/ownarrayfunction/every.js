const myevery=(array,callback)=>{
    var count=0;
    for(let i=0;i<array.length;i++)
    {
       if(callback(array[i]))
       {
           count+=1
       }
    }
if(count==array.length)
{
    return true;
}
else
{
    return false;
}
}    
const multipleoffive=(x)=> x%5==0
const inp=[5,10,15]
console.log(myevery(inp,multipleoffive));
