//alert("JavaScript works!");

// An object allows me to call upon a key ie name = job which can be called upon to give the value ie = "teacher"
// In the situtation of needing to use a value of 0 as the begining value javascript will not see it use a string in these situations
// While using an object I can also use another array of data within it. Allowing for more complex code that rests within another complex data type

//Global Variables

var membersGathered = true;
var readyToPlay = true;
var rankSlot = 89;
var enemeyTeamHive = false;
var homeTeamHive = true;
var emptySlot = 0;

var findMatch = function (readyToPlay) {
	if (readyToPlay === true) {
		console.log("Since we are ready to play lets find a match.");
		console.log("~ Match Found ~");
		console.log("~ Listing Roster ~");
	} else {
		console.log("Who are we missing?");
		return false;
	}
};
// findMatch(readyToPlay);

var gatherMembers = function (availableMembers) {
	var allHere = 0;
	if (allHere === availableMembers) {
		console.log("0 members requiered to start match.");
		console.log("Our team is ready!");
		return findMatch(readyToPlay);
	} else {
		console.log("Our team is not ready!");
		return false;
	}
};
var teamReq = function (availableMembers) {
	var availableMembers = 5;
	while(availableMembers > 0) {
		console.log(availableMembers + " Members requiered to start match.");		
		availableMembers--;
	 };	
	 	return gatherMembers(availableMembers);
};
teamReq();

var team = { 	name: "Viral", 
				members:[
				"Crazi", 
				"Tegom", 
				"Tonks", 
				"Rage",
				"Drag"
	], 
	sayGoodLuck: function () {
		console.log("Good Luck");
	},
				heros: {
				Crazi: "Gang Plank",
				Tegom: "Teemo",
				Tonks: "Shen",
				Rage: "Graves",
				Drag: "Shaco"
		}
}; 

var key = "heros";
for (var key in team.heros ) {

	console.log("Home Roster: " + "~ Player Name: = " + key + ", Hero: " + team.heros[key]);	
};

var key = "members";

var handleData = function (opponent) {
	for (var i = 0; i < opponent.members.length; i++) {
		var member = opponent.members[i];
		console.log("Enemy Roster: " + "~ Player Name: = " + member.name + ", Hero: " + member.hero);
	};
};
handleData(opponent2);
team.sayGoodLuck();

var viral = { name: team.name };

var teamStats = function (handleData) {
	var winCount = [];
	
	var winsNeeded = function (wins,team) {
		if (wins < 2 ){
			winCount.push(wins);
		} else {
			console.log("You can not change win value!");
		}
	};
	var rank = function (team) {
		for (var n = 0; n < winCount.length; n++) {
			console.log(name + " needs " + winCount[n] + " out of " +
				n + " wins to move up from rank " + rankSlot + ".");
		}
	};
	var getName = function (team) { return name; };
	return { 
		"name": getName,
		"winsNeeded": winsNeeded,
		"rank": rank,
	};
};
var viral = teamStats([viral.name]);
// api : application programming interface
viral.winsNeeded(1);
viral.rank(4);

team.sayGoodLuck = function () {
		console.log("Thanks For The Win!");
};
team.sayGoodLuck()