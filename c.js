// c. Print the following details name, capital, flag using forEach function


var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var Data = JSON.parse(this.response);
    var countries = Data.forEach((element) => {
        console.log("Name: " + element.name.common + ", " + "Capital: " + element.capital + ", " + "Flag: " +element.flag);
    })
}