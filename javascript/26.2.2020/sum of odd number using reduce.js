var number=[1,2,3,4,5,6,7,8,9,10];
var sum=number.reduce(function(accumulator,currentvalue,index){

if(currentvalue%2!=0){

return accumulator+currentvalue;
}
return accumulator
});
console.log(sum)
