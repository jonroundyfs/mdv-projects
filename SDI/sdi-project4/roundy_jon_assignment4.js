//Author: Jon Roundy
//SDI Project 3 1206 Week 4

// This is my project 4 library.
var library = function (){

// Problem 1 Does a string follow a 123-456-7890 pattern like a phone number?
// The function uses a pattern of a series of 10 numbers formated in 3 sections two sets of 3 digits and one set of 4.
// Start Problem 1

var usNumValidation = function (inputedNum) {
	
	var value = "inputedNum";
	var	usNumPat = /^\(?([0-9]{3})\)?[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/;
	// Above - Regular Expression, a pattern is used to check if the supplied values match the criteria
		if (usNumPat.test(inputedNum)) {  // Determines if value is within pattern rules
				console.log("Phone number validated."); // Sends string into console log
		} else {
				console.log("Not a valid Phone Number!"); // Sends string into console log
			return this;
	}

	}; // End Problem 1.
// Problem 2: Does a string follow an aaa@bbb.ccc pattern like an email address?
// Start Problem 2

var emailValidation = function (emailInfo) {
	
	
	var	emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
	// Above - Regular Expression, a pattern is used to check if the supplied values match the criteria.
		if (emailPat.test(emailInfo)) {  // Determines if value is within pattern rules
				console.log("Email address validated."); // Sends string into console log
		} else {
				console.log("Not a valid email address!"); // Sends string into console log
			return this;
	}

	}; // End Problem 2.

// Problem 3 Is the string a URL? (Does it start with http: or https:?)
											
var urlValidation = function (urlcheck){
	var urlpat = /^(http|https?:\/\/)[a-zA-Z0-9\-?]+\.[a-zA-Z0-9\-]+\./;
	// Above - This regular expression it checks the pattern will check if the url is valid.
	
	if (urlpat.test(urlcheck)) {  // Determines if value is within pattern rules
				console.log("Url validated."); // Sends string into console log
		} else {
				console.log("Not a valid Url!"); // Sends string into console log
			return this;
	}
}; // End Problem 3
// Problem 4 Title-case a string (split into words, then uppercase the first letter of each word)
// Start Problem 4
var titleCase = function(str){
/* string.prototype with this function it uses the pattern shown below w taking the first character of each word
within the string then * continues the previous task and continues it globally and changes the first character of
each word to uppercase then returns the rest of each word with lowercase.  */
	String.prototype.toProperCase = function (){

			return this.replace(/\w*/g, function (newTxt){
				return newTxt.charAt(0).toUpperCase() + newTxt.substr(1).toLowerCase();
		});
	};
	str.toProperCase();
	console.log(str.toProperCase());

};// End Problem 4

/* Problem 5 - Given a string that is a list of things seperated by a given string, as well as another string separator,
return a string with the first seperator changed to the second "a,b,c" + "," + "/" ->"a/b/c". */
// Start Problem 5
var stringSep = function(str){
	
	String.prototype.valueOf = function () {
 // Used genexp to change all values of , to /
	return this.replace(/\,/g, "\/", function (inputField){
		return inputField.valueOf("");

		});
	};
	str.valueOf();
	console.log(str.valueOf());

}; // End Problem 5
   
/* Problem 6 Format a number to use a specific number of decimal places, as for money: 2.1 -> 2.10 */
// Start problem 6
var roundUp = function (str){
	var fixed = parseFloat(str).toFixed(2); // I used parseFloat so it is treated as a decimal and not a string.
	console.log(fixed);
	return fixed;
	}; // End Problem 6

// Start Problem 7
//Problem 7 - Fuzzy-match a number: is the number above or below a number within a certain percent? */
// Could never figure out or find enough ref to fuzzy match
//End Problem 7


/* Problem 8 - Find the number of hours or days difference between two dates. */
// Start Problem 8
var schoolStart = function (startDate) {
	var coursesStarted = startDate;
	var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var msInDays = 1000 * 60 * 60 * 24;
  console.log(Math.ceil((currentDate()) - startDate.getTime()) / (msInDays)) + "days since I started sdi " + startDate)


}; // End Problem 8

/* Problem 9 - Given a string version of a number such as "42", return the value as an actual Number such as 42. */
// Start Problem 9

// End Problem 9

/* Problem 10 - Find the smallest value in an array that is greater than a given number */
// Start Problem 10

// End Problem 10

/* Problem 11 - Find the total value of just the numbers in an array, even if some of the items are not numbers. */
// Start Problem 11

// End Problem 11

/* Problem 12 - Given an array of object and the name of a key, return the array sorted by the balue of that key in
each of the objects: "a" + [{a:2},{a:3},{a:1}] -> [{a:1},{a:2},{a:3}] */
// Problem 12 Start

// Problem 12 Stop







return{
	"usNumValidation" : usNumValidation,
	"emailValidation" : emailValidation,
	"urlValidation"   : urlValidation,
	"titleCase"       : titleCase,
	"stringSep"       : stringSep,
	"roundUp"         : roundUp,
	"startDate"       : startDate
	}; // End of function returns
}; // End of library


// Function Calls

var lib = library();
// Problem 1
lib.usNumValidation("912-342-7398"); // Runs usNumValidation from library. () is the value being checked
// Problem 2
lib.emailValidation("test@abc.com"); // Runs emailValidation from library. () is the value being checked
// Problem 3
lib.urlValidation("http://www.domain.com");
// Problem 4
lib.titleCase("this is a test");
// Problem 5
lib.stringSep("a,b,c");
// Problem 6
lib.roundUp("2.1");
// Problem 7
// Could never figure out or find enough ref to fuzzy match
// Problem 8
lib.startDate(new Date(2012, 5, 28));
