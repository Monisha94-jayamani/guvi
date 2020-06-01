//2.7. Print the age of Nodejs Author in console. 
// node js authorage
//function to create libarary array of object and find node js authorage
function nodejsauthorage(){
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
  //node js age of author
   var nodejsage=library[1]["authordetails"].age;
   console.log(nodejsage);
   
}
nodejsauthorage();
    
