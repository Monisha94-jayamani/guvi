var person = {
    firstName:"guvi",
  fullName: function(a,b) {
    return this.firstName + " " + this.lastName+" "+a+" "+b;
  }
}
var person1 = {
  firstName:"geek",
  lastName: "Doe"
}
//call function
console.log(person.fullName.call(person1,"hi","hello"))
//output:geek Doe hi hello
//not takes arguments as array
console.log(person.fullName.call(person1,["hi","hello"]))
//output:geek Doe hi,hello undefined=>takes whole array as one string ==so undefined 
//apply function
console.log(person.fullName.apply(person1,["hi","hello"]))
//output=>geek Doe hi hello    a=h1,b=hello
//if i didnt give b as parameters=>output=geek Doe hi so hello to taken
//bind function
var a=person.fullName.bind(person1,"work","hard");
console.log(a())
//output=>geek Doe work hord
//if pass as array takes as single string as same in call function so b is undefined output=>geek Doe work,hard undefined
//if i didnt call it return raw function
console.log(person.fullName.bind(person1,["work","hard"]))

//output
//geek Doe hi hello
///geek Doe hi,hello undefined
//geek Doe hi hello
//geek Doe work hard
//[Function: bound fullName]


