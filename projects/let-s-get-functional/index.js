// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jlacombe1");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
var maleCount = function(array) {


  let maleGender = _.filter(array, function(elt) {
    return elt.gender === "male";
  });
  return maleGender.length;
};

var femaleCount = function(array) {


  let femaleGender = _.filter(array, function(elt) {
    return elt.gender === "female";
  });
  return femaleGender.length;
};


var oldestCustomer = function(array) {
  
  let ages = []
  _.map(array, function(elt, i, array) {
    ages.push(elt.age);
  });
  
  var oldestNumber = Math.max(...ages);
  let oldestName;
  
  _.each(array, function(elt, i, array) {
    if (elt.age === oldestNumber) {
      oldestName = elt.name;
    }
  });
  
  return oldestName;
  
}
var youngestCustomer = function(array) {
  
  let ages = []
  _.map(array, function(elt, i, array) {
    ages.push(elt.age);
  });
  
  var youngestNumber = Math.min(...ages);
  let youngestName;
  
  _.each(array, function(elt, i, array) {
    if (elt.age === youngestNumber) {
      youngestName = elt.name;
    }
  });
  
  return youngestName;
  
}

var averageBalance = function(array) {

  let balances = [];

  _.each(array, function(elt, i, array) {
    balances.push(elt.balance);
  })

  let balanceNumbers = [];

  _.each(array, function(elt, i, array) {
    balanceNumbers.push(Number(balances[i].replace("$", "").replace(",", "")));
  });


  let total = 0;

  _.each(balanceNumbers, function(elt, i, array) {
    total += elt;
  });

  return Math.round(100 * (total / balances.length)) / 100;


}



var firstLetterCount = function(array, letter) {
  
  let count = [];
  
  _.filter(array, function(elt, i, array) {
      if(elt.name[0] === letter.toUpperCase() || elt.name[0] === letter.toLowerCase()) {
         count.push(elt.name)
    };
  });
  
  return count.length;
  
}

var friendFirstLetterCount = function(array, customer, letter) {
  
}

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
