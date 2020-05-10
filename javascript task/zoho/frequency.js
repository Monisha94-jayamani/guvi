 const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data);
});

imp.on("close",()=>{
    var a=parseInt(userInput[0]);
    var array=userInput[1].split(" ");
  function sortByFrequency(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });
    

    for(var key in frequency){
        sortAble.push([key, frequency[key]])
    }

    sortAble.sort(function(a, b){
        return a[1] - b[1]
    })

    
    sortAble.forEach(function(obj){
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    })
    return newArr;
    
}
var b=sortByFrequency(array);
console.log(b.join(" "));


});
i/p and o/p
Sample Input :
5
8 8 1 1 3
Sample Output :
3 1 1 8 8
