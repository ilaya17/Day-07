// d. Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var Data = JSON.parse(this.response);
    var total = Data.reduce((ini, ele) => {
        return ini+ele.population
    },0);
    console.log("Total Population: " + total);
}