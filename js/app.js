"use strict";
//hour array
var hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var Pike={          //create five object literals with random customer and cookies purchased data
    minCust: 23,
    maxCust: 65,
    avgCooks: 6.3,
    hourArray: [],
    randomCust: function(){
        Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
        return this.randomCust;
    },                                     //everybody was using this method of getting a good random num.
        cooksPurchased = function() {
            for (var i=0; i<15; i++){
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
            };
        }
};


var SeaTac={
    minCust: 3,
    maxCust: 24,
    avgCooks: 1.2,
    hourArray: [],
    randomCust: function(){
        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
    },
        cooksPurchased = function() {
            for (var i=0; i<15; i++){
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
            };
        }
};


var SeattleCenter={
    minCust: 11,
    maxCust: 38,
    avgCooks: 3.7,
    hourArray: [],
    randomCust: function(){
        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
    },
        cooksPurchased = function() {
            for (var i=0; i<15; i++){
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
            };
    }
};


var CapitolHill={
    minCust: 20,
    maxCust: 38,
    avgCooks: 2.3,
    hourArray: [],
    randomCust: function(){
        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
    },
        cooksPurchased = function() {
            for (var i=0; i<15; i++){
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
            };
        }
};


var Alki={
    minCust: 2,
    maxCust: 16,
    avgCooks: 4.6,
    hourArray: [],
    randomCust: function(){
        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
    },
        cooksPurchased = function() {
            for (var i=0; i<15; i++){
            this.hourArray[i] = Math.floor(this.randomCust() * this.avgCooks);
            };
        }
};

Pike.cooksPurchased();                  //call the function to generate random sales data per store
SeaTac.cooksPurchased();               // and populate the hourArray for each object literal
SeattleCenter.cooksPurchased();
CapitolHill.cooksPurchased();
Alki.cooksPurchased();

function MakeList (location, id) {                      //use JS to create html lists
    var ListLocation = document.getElementById(id);    // create variable to store dom id
    for (var i = 0;i<hours.length;i++){               // iterate through hour array at very top
        var sales = document.createElement('li');    // create a new variable sales that is a list element
        var message = '${hours[i]}: ${location.hoursArray[i]} cookies'; //display a message
        sales.textcontent = message;                                   // append the child 
        ListLocation.appendChild(sales);    }
}

var totals = document.createElement('li');
    var total = 0;
        for (var i = 0; i<hours.length;i++){
            total += location.hourArray[i];
        }
    var totalMessage = 'Total: ${total} cookies';
    totals.textContent = totalMessage;
    ListLocation.appendChild(totals);
    
MakeList(Pike,"PikeList");
MakeList(SeaTac,"SeaTacList");
MakeList(SeattleCenter, "SeattleCenterList");
MakeList(CapitolHill, "CapitolHillList");
MakeList(Alki, "AlkiList");

// function simulate() {
//     Pike.numCust();
//     Pike.cooksPurchased();
//     SeaTac.numCust();
//     SeaTac.cooksPurchased();
//     SeattleCenter.numCust();
//     SeattleCenter.cooksPurchased();
//     CapitolHill.numCust();
//     CapitolHill.cooksPurchased();
//     Alki.numCust();
//     Alki.cooksPurchased();
// }

// simulate();
// console.log(Pike);

//had some help from Rebel Flesh, but i typed it all out and changed values. Still.. it didn't work.. but I have run out of time. 