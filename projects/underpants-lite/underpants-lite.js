// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

const _ = {};


/**
 * START OF OUR LIBRARY!
 * Implement each function below it's instructions
 */

/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */

_.typeOf = function(value) {
    if (value === null) {
        return "null";
    }
    else if (Array.isArray(value)) {
        return "array";
    }
    else {
        return typeof(value);
    }
}

/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

_.first = function(array, number) {

    let arr = [];

    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    else if (typeof(number) !== "number") {
        return array[0];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        for (let i = 0; i < number; i++) {
            arr.push(array[i]);
        }
    }

    return arr;
}

/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

_.last = function(array, number) {

    let arr = [];

    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    else if (_.typeOf(number) !== "number") {
        return array[array.length - 1];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        for (let i = array.length - 1; i >= array.length - number; i--) {
            arr.unshift(array[i]);
        }
    }
    return arr;
}

/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

_.indexOf = function(array, value) {

    let index;

    for (let i = 0; i <= array.length; i++) {
        if (array[i] === value) {
            index = i;
            break;
        }
        else {
            index = -1;
        }
    }

    return index;





}

/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

_.contains = function(array, value) {

    let answer;


    return answer = (_.indexOf(array, value) >= 0) ? true : false;

}


/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

_.each = function(collection, fn) {

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            fn(collection[i], i, collection);
        }
    }
    else {
        for (let key in collection) {
            fn(collection[key], key, collection);
        }
    }
}

/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */

_.filter = function(array, fn) {

    let stupidArray = [];

    _.each(array, function(elt, i, array) {
        if (fn(elt, i, array) === true) {
            stupidArray.push(elt);
        }
    });

    // _.each(array, function(elt, i, array) {

    // })

    return stupidArray;
};

/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

_.map = function(collection, fn) {

    let loganArray = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            loganArray.push(fn(collection[i], i, collection));

        }
    }
    else {

        for (let key in collection) {
            loganArray.push(fn(collection[key], key, collection));
        }

    }

    return loganArray;

}

/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

_.reject = function(array, fn) {

    let randomVar = [];

    _.filter(array, function(elt, i, array) {
        if (fn(elt, i, array) === false) {
            randomVar.push(elt);
        }
    })

    return randomVar;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, fn) {

    let allValues = [];
    let matches = [];
    let misMatches = [];

    _.filter(array, function(elt, key, array) {
        if (fn(elt, key, array) === true) {
            matches.push(elt);
        }
        else {
            misMatches.push(elt);
        }
    })
    allValues.push(matches, misMatches);
    return allValues;
}


/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

_.every = function(collection, test) {
    let allTrue = true;


    if (typeof test === 'function') {
        _.each(collection, function(value, loc, collection) {
            if (!test(value, loc, collection)) {
                allTrue = false;

            }
        });
    }

    _.each(collection, function(value, loc, collection) {
        if (!value) {
            allTrue = false;
        }
    })
    return allTrue;

}
/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

_.some = function(collection, test) {
    let allFalse = false;


    if (typeof test === 'function') {
        _.each(collection, function(value, loc, collection) {
            if (test(value, loc, collection)) {
                allFalse = true;

            }
        });

        return allFalse;

    }

    _.each(collection, function(value, loc, collection) {
        if (value) {
            allFalse = true;
        }
    })
    return allFalse;

}

/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
 
_.pluck = function(array, property) {
    let values = [];
    
    _.map(array, function(elt, i, array) {
        values.push(elt[property]);
    });
    
    return values;
    
}
 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
