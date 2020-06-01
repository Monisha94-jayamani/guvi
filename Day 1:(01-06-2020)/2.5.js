//2.5 Find the datatype of author age in Nodejs Object. 
//to find the datatype of author age in node js
//create a function to create a array of object called library
function authorage(){
    //create a array of objects given as it is
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
  //to find the datatype of author age in node js
   var authorage=library[1].authordetails.age;
   console.log(typeof(authorage));
}
authorage();
    
