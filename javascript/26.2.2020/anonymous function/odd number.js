var a  = [1, 3, 2, 5, 10];
var b =function(a){
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) 
    {
        s+=a[i]+' ';
    }
  }
  return s;
}
var s="";
console.log(b(a));

