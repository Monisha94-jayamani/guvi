//2.3 Insert a new reader in the readers array for Nodejs.
//to insert a new reader in a array for readers in node js
//create a function to create a array of object called library
function read(){
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
   //to insert a new reader in a array for readers in node js
    library[1]["readers"]={
        read:"book"
    }
    //console.log(library[1]["readers"]);
}
read();
    
