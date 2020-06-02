//1.4 1.4 Display the count of all countries sharing their border with the country name in console. 

<!DOCTYPE HTML>
<html>
    <head>
        <title>api countries 1.1 to country name with flag</title>
    </head>
    <body>
        
    <script src="api.js">
        </script>
    </body>
    </html>
//script file
//1.4 Display the count of all countries sharing their border with the country name in console

var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function(){
    //the received response in string in order to convert into json object parse
    var jsonData=JSON.parse(this.response)
    //console.log(jsonData);
    //function to  iterate and get the country name and borders 
for(var i in jsonData)
{
    //print the country and alpha3code and population
    //(Example Output : Afghanistan shares its border with 6 countries that includes (“IRN”, “PAK”, “TKM”, “UZB”, “TJK”, “CHN”) ) 
      //country name
    var country=jsonData[i].name;
    //borders of country
    var border=[];
    border=jsonData[i].borders; 
    //borders length
    var length=border.length;
    console.log(country+" shares its border with "+length+" countries that includes ("+border+")");
    country="";
    border=[];
    length=0;
}
};
request.send();
