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
    var arr = _.filter(array, function(val, loc, col){
        if (array[loc].gender === "male"){
            return true;
        }else{
            return false;
        }
    });
    return arr.length;
};

var femaleCount = function(array) {
    var arr = _.filter(array, function(val, loc, col){
        if (array[loc].gender === "female"){
            return true;
        }else{
            return false;
        }
    });
    return arr.length;
};

var oldestCustomer = function(array){
    var ages = _.map(array, function(elt, i, array) {
        return elt.age;
    });
    var oldest = Math.max(...ages);
    var oldestName;
    _.each(array, function(elt, i, array) {
      if (elt.age === oldest) {
        oldestName = elt.name;
      }
    });
    return oldestName;
};

var youngestCustomer = function(array){
    var ages = _.map(array, function(elt, i, array) {
        return elt.age;
    });
    var youngest = Math.min(...ages);
    var youngestName;
    _.each(array, function(elt, i, array) {
      if (elt.age ===youngest) {
        youngestName = elt.name;
      }
    });
    return youngestName;
};

var averageBalance = function(array){
    var balances = [];
 
    _.each(array, function(elt, i, array) {
        balances.push(elt.balance);
    });
 
    var balanceNumbers = [];
 
    _.each(balances, function(elt, i , array) {
        balanceNumbers.push(Number(balances[i].replace('$','').replace(',', '')));
    });
 
    var balanceTotal = 0;
 
    _.each(balanceNumbers, function(elt, i, array) {
        balanceTotal += elt;
     
    });
 
    return balanceTotal / balances.length;
};

var firstLetterCount = function(array, letter){
    var arr = _.filter(array, function(val, loc, col){
        if(array[loc].name.charAt(0).toUpperCase() === letter.toUpperCase()){
            return true;
        }else if(array[loc].name.charAt(0).toLowerCase() === letter.toUpperCase()){
            return true;
        }else{
            return false;
        }
    });
    
    return arr.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    var names = 0;
    var friendsList = [];
   
    _.each(array, function(elt, i, array) {
      if (elt.name === customer)  {
        friendsList = elt.friends;
      }
    });
 
    _.each(friendsList, function(elt, i, array) {
      if (elt.name[0] === letter.toUpperCase() || elt.name[0] === letter.toLowerCase()) {
        names++;
      }
    });
 
    return names;
};

var friendsCount = function(array, name){
    let haveFriend = [];
   
    _.each(array, function(person, loc, personList) {
        _.each(person.friends, function(friend, loc2, friendList) {
            if (friend.name === name) {
                haveFriend.push(person.name);
            }
        });
    });
   
    return haveFriend;
};

var topThreeTags = function(array){
    var topThree = [];
  var allTags = [];
 
  _.each(array, function(person) {
    _.each(person.tags, function(tag) {
      allTags.push(tag);
    });
  });
 
  var getCount = function(array) {
    var counts = {};
    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i];
 
      if (counts[word] === undefined) {
        counts[word] = 1;
      }
      else {
        counts[word] = counts[word] + 1;
      }
    }
    return counts;
  };
 
  const counts = getCount(allTags);
 
 
  var most = function(array) {
    var compare = 0;
    var mostFrequent;
    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i];
 
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = array[i];
      }
    }
    return mostFrequent;
  };
 
  for (var i = 0; i < 3; i++) {
    var topWord = most(allTags);
    topThree.push(topWord);
    allTags = allTags.filter(function(e) { return e !== topWord; });
  }
 
  return topThree;
};

var genderCount = function(array){
    var object = {};
    var male = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "male"){
            return true; 
        }
    });
    
    object.male = male.length;
    
    var female = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "female"){
            return true;   
        }
    });
    
    object.female = female.length;
    
    var trans = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "transgender"){
            return true;
        }
    });
    
    object.transgender = trans.length;
    
    
    return object;
};

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