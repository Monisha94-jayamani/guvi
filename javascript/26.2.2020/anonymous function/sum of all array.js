var a  = [1, 3, 2, 5, 10];
var sum=0;
var b =function(a){
  for (var i = 0; i < a.length; i++) {
    sum+=a[i]
  }
  return sum;
}
var s="";
console.log(b(a));

