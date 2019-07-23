"use strict";
//hour array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//create five object literals with random customer and cookies purchased data
var Pike = {
    name: 'Pike',
    minCust: 23,
    maxCust: 65,
    avgCooks: 6.3,
    hourArray: [],
    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    }, //everybody was using this method of getting a good random num.
    cookiesPurchased: function () {
        for (var i = 0; i < 15; i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
        };
    }
};


var SeaTac = {
    name: 'SeaTac',
    minCust: 3,
    maxCust: 24,
    avgCooks: 1.2,
    hourArray: [],
    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesPurchased: function () {
        for (var i = 0; i < 15; i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
        };
    }
};


var SeattleCenter = {
    name: 'SeattleCenter',
    minCust: 11,
    maxCust: 38,
    avgCooks: 3.7,
    hourArray: [],
    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesPurchased: function () {
        for (var i = 0; i < 15; i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
        };
    }
};


var CapitolHill = {
    name: 'CapitolHill',
    minCust: 20,
    maxCust: 38,
    avgCooks: 2.3,
    hourArray: [],
    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesPurchased: function () {
        for (var i = 0; i < 15; i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
        };
    }
};


var Alki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCooks: 4.6,
    hourArray: [],
    randomCust: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    cookiesPurchased: function () {
        for (var i = 0; i < 15; i++) {
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
        };
    }
};

Pike.cookiesPurchased(); //call the function to generate random sales data per store
SeaTac.cookiesPurchased(); // and populate the hourArray for each object literal
SeattleCenter.cookiesPurchased();
CapitolHill.cookiesPurchased();
Alki.cookiesPurchased();

function MakeList(location, id) { //use JS to create html lists
    var ListLocation = document.getElementById(id); // create variable to store dom id
    var listHeader = document.createElement('strong');
    listHeader.textContent = location.name;
    ListLocation.appendChild(listHeader);
    for (var i = 0; i < hours.length; i++) { // iterate through hour array at very top
        var sales = document.createElement('li'); // create a new variable sales that is a list element
        var message = `${hours[i]}: ${location.hourArray[i]} cookies`; //display a message
        sales.textContent = message; // append the child 
        ListLocation.appendChild(sales);
    }

    var totals = document.createElement('li');
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
        total += location.hourArray[i];
    }
    var totalMessage = `Total: ${total} cookies`;
    totals.textContent = totalMessage;
    ListLocation.appendChild(totals);
}

MakeList(Pike, "pikeList");
MakeList(SeaTac, "seaTacList");
MakeList(SeattleCenter, "seattleCenterList");
MakeList(CapitolHill, "capitolHillList");
MakeList(Alki, "alkiList");

// function simulate() {
//     Pike.numCust();
//     Pike.cookiesPurchased();
//     SeaTac.numCust();
//     SeaTac.cookiesPurchased();
//     SeattleCenter.numCust();
//     SeattleCenter.cookiesPurchased();
//     CapitolHill.numCust();
//     CapitolHill.cookiesPurchased();
//     Alki.numCust();
//     Alki.cookiesPurchased();
// }

// simulate();
// console.log(Pike);

//had some help from Rebel Flesh, but i typed it all out and changed values. Still.. it didn't work.. but I have run out of time. 