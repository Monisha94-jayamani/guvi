const mysome=(array,callback)=>{
    
    for(let i=0;i<array.length;i++)
    {
           
       if(callback(array[i]))
       {
           return true;
       }
    }
    
return false;
}  

const somefunc=(x)=> x>10;
const inp=[10,50,70]
console.log(mysome(inp,somefunc));
