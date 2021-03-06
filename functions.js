//Chunky Monkey
function chunkArrayInGroups(arr, size) {
   var newArr = [];
   while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
   }

   return newArr;
}

//Mutations

function mutation(arr) {
   var firstStr = arr[0].toLowerCase();
   var secondStr = arr[1].toLowerCase();

   for (var i = 0; i < secondStr.length; i++) {
      if (firstStr.indexOf(secondStr[i]) === -1) return false;
   }
   return true;
}

//Where do I Belong

function getIndexToIns(arr, num) {
   // have to sort the arr with a function
   arr.sort(function (a, b) {
      return a - b;
   });
   for (var i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
         return i;
      }
   }
   //if the num is higher then the array then it needs to go to the end of it

   return arr.length;
}

//Where do I Belong

//falsy bouncer
function bouncer(arr) {
   return arr.filter(function (item) {
      return item;
   });
}

// Slice and Splic

function frankenSplice(arr1, arr2, n) {
   // make a copy of the second array
   var newArr = arr2.slice();
   //   splice it and add the first array with the spread operater
   newArr.splice(n, 0, ...arr1);
   return newArr;
}

//Title Case a Sentence
function titleCase(str) {
   var titled = str
      .toLowerCase()
      .split(" ")
      .map(function (elem) {
         return elem[0].toUpperCase() + elem.slice(1);
      });

   return titled.join(" ");
}

//boo who
function booWho(bool) {
   if (bool === true) {
      return true;
   } else if (bool === false) {
      return true;
   } else {
      return false;
   }
}

//finders keepers
function findElement(arr, func) {
   let num = arr.filter(func);
   if (num.length > 1) {
      return num[0];
   }
   return undefined;
}

// Truncate a String
function truncateString(str, num) {
   if (str.length > num) {
      return str.slice(0, num) + "...";
   } else {
      return str;
   }
}
// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
   var numTimes = "";
   // if its not a positive number return an empty string
   if (num < 0) return "";
   //    loop as many time as user inputs in parameter
   for (var i = 0; i < num; i++) {
      numTimes += str;
   }
   return numTimes;
}

//Confirm the Ending

function confirmEnding(str, target) {
   //use negative target to start from the end then compare to target parameter
   if (str.substr(-target.length) === target) {
      return true;
   }
   return false;
}

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
   // need to set a varible to hold the largest numbers
   var results = [];
   //run a for loop through the main array(outter array)
   for (var ma = 0; ma < arr.length; ma++) {
      //var to hold the largest number & initialise it with the first number.
      // This must be outside an inner loop so it won’t be reassigned until we find a larger number.
      var largestNumber = arr[n][0];
      //   run a second for loop to go through the arrays inside the main array
      for (var na = 1; na < arr[n].length; na++) {
         //if condtition to check against the largest number
         //  you can work through multidimensional arrays by arr[1st array][2nd array]
         if (arr[n][na] > largestNumber) {
            //if it is replace the current
            largestNumber = arr[n][na];
         }
      }
      //save the largest number in the corresponding position inside of the results array.
      results[n] = largestNumber;
   }

   return results;
}

//Find the Longest Word in a String
function findLongestWordLength(str) {
   // first I have to turn the string into an array because strings are immutable
   var eachWord = str.split(" ");
   //I have to set a variable to get save the longest word
   var largestWord = 0;
   //run a for loop through the string of words incrementing by one
   for (var i = 0; i < eachWord.length; i++) {
      // run an if statement to check if the length of the current word is bigger then the current one
      if (eachWord[i].length > largestWord) {
         //   if it is load it into the varible to return the number
         largestWord = eachWord[i].length;
      }
   }

   return largestWord;
}
//Factorialize a Number
function factorialize(num) {
   // you have to initalize that 1 and 0 return 1
   for (var value = 1; num > 0; num--) {
      value *= num;
   }
   return value;
}

// Reverse a String. In order to reverse a string you have to turn it into am array first

function reverseString(str) {
   //   spitting the string turns it to an array then reverses it and joins it
   return str.split("").reverse().join("");
}

// Convert Celsius to Fahrenheit

function convertToF(celsius) {
   // The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
   let fahrenheit = (celsius * 9) / 5 + 32;

   return fahrenheit;
}
