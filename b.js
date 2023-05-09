// b.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function (){
    var Data = JSON.parse(this.response);
    var countries = Data.filter((element) => {
        return element.population < 200000
    });
    for(let i=0; i<countries.length-1; i++){
        console.log(countries[i].population + " :" + countries[i].name.common);
    }
}