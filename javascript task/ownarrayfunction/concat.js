const myconcat=(array,callback)=>{
    
    for(let i=0;i<array.length;i++)
    {
           
       callback(array[i])
    }
return s;
}    
var s="";
const concatfunc=(x)=> s+=x;
const inp=["hi","am","here"]
console.log(myconcat(inp,concatfunc));
