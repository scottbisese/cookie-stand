"use strict";

var Pike={
    minCust: 23,
    maxCust: 65,
    avgCooks: 6.3,
    hourArray: [],
    numCust: function(){
        return (math.random()*(Pike.maxCust-Pike.minCust) + Pike.minCust);
    },
    cooksPurchased: function(){
        for(var i=0; i<15; i++){
            Pike.hourArray[i]= math.floor(this.numCust()*Pike.avgCooks);
        }
    },
};

var SeaTac={
    minCust: 3,
    maxCust: 24,
    avgCooks: 1.2,
    hourArray: [],
    numCust: function(){
        return (math.random()*(SeaTac.maxCust-SeaTac.minCust) + SeaTac.minCust);
    },
    cooksPurchased: function(){
        for(var i=0; i<15; i++){
            SeaTac.hourArray[i]= math.floor(this.numCust()*SeaTac.avgCooks);
        }
    },
};

var SeattleCenter={
    minCust: 11,
    maxCust: 38,
    avgCooks: 3.7,
    hourArray: [],
    numCust: function(){
        return (math.random()*(SeattleCenter.maxCust-SeattleCenter.minCust) + SeattleCenter.minCust);
    },
    cooksPurchased: function(){
        for(var i=0; i<15; i++){
            SeattleCenter.hourArray[i]= math.floor(this.numCust()*SeattleCenter.avgCooks);
        }
    },
};

var CapitolHill={
    minCust: 20,
    maxCust: 38,
    avgCooks: 2.3,
    hourArray: [],
    numCust: function(){
        return (math.random()*(CapitolHill.maxCust-CapitolHill.minCust) + CapitolHill.minCust);
    },
    cooksPurchased: function(){
        for(var i=0; i<15; i++){
           CapitolHill.hourArray[i]= math.floor(this.numCust()*CapitolHill.avgCooks);
        }
    },
};

var Alki={
    minCust: 2,
    maxCust: 16,
    avgCooks: 4.6,
    hourArray: [],
    numCust: function(){
        return (math.random()*(Alki.maxCust-Alki.minCust) + Alki.minCust);
    },
    cooksPurchased: function(){
        for(var i=0; i<15; i++){
           Alki.hourArray[i]= math.floor(this.numCust()*Alki.avgCooks);
        }
    },
};
function simulate() {
    Pike.numCust();
    Pike.cooksPurchased();
    SeaTac.numCust();
    SeaTac.cooksPurchased();
    SeattleCenter.numCust();
    SeattleCenter.cooksPurchased();
    CapitolHill.numCust();
    CapitolHill.cooksPurchased();
    Alki.numCust();
    Alki.cooksPurchased();
}

simulate();
console.log(Pike);