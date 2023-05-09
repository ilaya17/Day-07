// e. Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
    var Data = JSON.parse(this.response);
    for(let i=0; i<Data.length; i++){
        if(Data[i].currencies){
            console.log(Data[i].currencies.USD);
        }
    }
}