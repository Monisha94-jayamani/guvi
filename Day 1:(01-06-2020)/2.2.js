//Insert a new key called email and assign a value email1@gmail.com and
//email2@gmail.com respectively in both authorDetails object;
//create a function to create a array of object called library
function email(){
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
                name:"rajj",
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
    //add the email="email1@GMAIL.COM" and email2@gmail.com on both authors authordetails
    //authordetailsin javascript  index 2
      library[0]["authordetails"]["email"]="email1@gmail.com";
      //authordetails nodejs authordetails so index 1
       library[1]["authordetails"]["email"]="email2@gmail.com";
    //lets print the updated authordetails
   //console.log(library[0]["authordetails"])
     //console.log(library[1]["authordetails"])
   
}
email();
    
