//2.4 Create a New Object in the library for a new Book called SQL
//to add a new book in library object
//create a function to create a array of object called library
function booksql(){
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
  //to add a new book in library object as sql
    library[2]={
        title:"SQL"
    }
    //console.log(library);
}
booksql();
    
