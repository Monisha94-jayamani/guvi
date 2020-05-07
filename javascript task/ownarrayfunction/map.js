const myevery=(array,callback)=>{
    let c=0;
    for(let i=0;i<array.length;i++)
    {
        if(callback(array[i])){
            c+=1;
        }
    }
    if(c===array.length)
    
        return true
    
    else
    
        return false
    
    
}
const predict=(x)=> x.length>3
const data=["apple","bathh","catjk"]
console.log(myevery(data,predict));
