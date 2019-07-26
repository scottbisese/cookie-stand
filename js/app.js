"use strict";
//hour array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// then delete those and switch to constructor for the lab 7 version
//this VVV is your basic object constructor that we will pass in arguments 
function Location (name, minCust, maxCust, avgCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.hourArray = [];
    this.total = 0;
    this.randomCust = function() {
        var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        return numCust;
    }
    this.cookiesPurchased = function () {
        for (var i = 0;i<hours.length;i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCookies);
        }
    }
    this.totalSold = function() {
        for (var i = 0;i<hours.length;i++) {
            this.totalSold += this.hourArray[i];
        }
    }
}

//make a table header i.e. the first vertical column of lables before data
function makeTableHead() {
    var tRow = document.getElementById('tHead');
    var blank = document.createElement('th');
    tRow.appendChild(blank);
    for (var i = 0; i < hours.length; i++) {
        var hoursElement = document.createElement('th');
        hoursElement.textContent = hours[i];
        tRow.appendChild(hoursElement);
        }
    var totalHead = document.createElement('th');
    totalHead.textContent = 'The Day\'s Sellage';
    tRow.appendChild(totalHead);                                    
}

//this fills in those pesky tds AKA table data (cells)
function makeTableBody(location, id) {
    var tRow = document.getElementById(id);
    for (var i = 0;i<hours.length;i++) {
        var salesElement = document.createElement('td');
        var numPurchased = location.hourArray[i];
        salesElement.textContent = numPurchased;
        tRow.appendChild(salesElement);
        }
    var totalEl = document.createElement('td');
    totalEl.textContent = location.total;
    tRow.appendChild(totalEl);
}

//this well get the last row and column AKA Grand Total
function grandTotal() {
    var total = [];
    for (var i = 0; i < hours.length; i++) {
        total[i] = pike.hourArray[i] + seaTac.hourArray[i] + seattle.hourArray[i] + capitolHill.hourArray[i] + alki.hourArray[i];
    }
    return total;
}

//this makes the footer
function makeTableFoot() {
    var tRow = document.getElementById('tFoot');
    var totalHead = document.createElement('td');
    totalHead.textContent = 'Hourly Total';
    tRow.appendChild(totalHead);
    for (var i = 0;i < hours.length; i++) {
        var hoursElement = document.createElement('td');
        var hourlyTotal = grandTotal()[i];
        hoursElement.textContent = hourlyTotal;
        tRow.appendChild(hoursElement);
    }
    var totalSalesElement = document.createElement('td');
    var allSales = pike.total + seaTac.total + seattle.total + capitolHill.total + alki.total;
    totalSalesElement.textContent = allSales;
    tRow.appendChild(totalSalesElement);
}


//this passes in the arguments to create the stores.. constructor style
var pike = new Location('pike',23,65,6.3);
var seaTac = new Location('seaTac',3,24,1.2);
var seattle = new Location('seattle',11,38,3.7);
var capitolHill = new Location('capitolHill',20,38,2.3);
var alki = new Location('alki',2,16,4.6);

//this here code VVV calls that random sales stuff from the abyss.
pike.cookiesPurchased(); 
seaTac.cookiesPurchased(); 
seattle.cookiesPurchased();
capitolHill.cookiesPurchased();
alki.cookiesPurchased();

pike.totalSold();
seaTac.totalSold();
seattle.totalSold();
capitolHill.totalSold();
alki.totalSold();

//call the table to come forth-eth
makeTableHead();
makeTableFoot();
makeTableBody(pike,'pike');
makeTableBody(seaTac,'seaTac');
makeTableBody(seattle,'seattle');
makeTableBody(capitolHill,'capitolHill');
makeTableBody(alki,'alki');