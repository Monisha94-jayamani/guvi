var a="mom";
//convert a String into Arrayusing split
var arr=a.split("");
//to print a Array
console.log(arr);
//storing string in separate variable
var temp=a;
//empty string variable to store my reverse a value
var s="";
for(var i=arr.length-1;i>=0;i--)
{
    s+=arr[i];
}
console.log(s);
if(s==temp)
{
    console.log("palindrome");
}
else
{
    console.log("not a palindrome");
}
