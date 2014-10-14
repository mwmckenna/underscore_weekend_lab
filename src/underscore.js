var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if (n > 1) {
      for (var i = n; i < array.length; i--) {
      return array.indexOf[i];
     }
    }
    else {
      return array.indexOf[1];
    }
   },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if (n < array.length) {
      return array.indexOf[n];
      (n--);
    } else {
      return array.indexOf[n];
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var a = [];
    for (var i=0, l=array.length; i<l; i++)
        if (a.indexOf(array[i]) === -1 && array[i] !== '')
            a.push(array[i]);
    return a;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    return map(array, property(key));
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {

  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {

  }
};
module.exports = myFunctions;
