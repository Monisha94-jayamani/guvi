//1.1 Extract and print all the country name with the flag URL in console
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
//script tag
var request=new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.onload=function(){
    //the received response in string in order to convert into json object parse
    var jsonData=JSON.parse(this.response)
    //console.log(jsonData);
    //function to  iterate and get the country name and flag name
for(var i in jsonData)
{
    //print the country and flag
    console.log(jsonData[i].name,jsonData[i].flag)
}
};
request.send();
