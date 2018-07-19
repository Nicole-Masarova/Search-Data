// ATTEMPT 1
// fetch('https://seasoned.atlassian.net/rest/agile/1.0/board/21/sprint/70/issue?fields=timetracking').then(response => {
//   return response.json();
// }).then(data => {
  
//   console.log(data);
// }).catch(err => {
//   window.alert('Sorry. An error was thrown.')
// });

let dataResponse;
// ATTEMPT 2
fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  dataResponse = data.issues;
  return dataResponse;
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});

//get the data file

// FUNCTION

let projectNameInput = document.getElementById("ProjectNameInput"); 
let boardNameInput = document.getElementById("BoardNameInput");
let timeEstimate = 'fields.timeEstimate';

// let onlyTimeTrackingArray = [];


// for(i=0, i<dataResponse.length, i++){
// 	if projectNameInput === 'issues.key' then(){
// 		//will get id when name matches
// 			onlyTimeTrackingArray.push(data[i].fields.timetracking);
// 	};
// // };

// return onlyTimeTrackingArray;

var tableHiringFeatures = document.createElement("TABLE");
for (i = 0; i < dataResponse.length; i++) {
        createCell(row.insertCell(i), i, 'row');
};

let str; //this is the variable that defines the string that has been pulled from between "name=" and ",goal="


function extractString(){
	var str = dataResponse.fields.customfield_10115
	str.split('name=').pop().split(',goal=').shift();
	return str;
}

let nameOfSprint = []; //ths is the array that will hold the strings that were pulled (the names of the sprints)
 
function checkAndStore(){
	for (i=0, i < dataResponse.length; i++) {
		extractString(str);
		loop in nameOfSprint array 
	}
	// if(str)
}

function enterDataIntoTable() { 
	if(onlyTimeTrackingArray.fields.timeestimate === 0) then {  
		for (i=0, i < dataResponse.length; i++) {
			nextItem = array[i+1];
		};
	} else if {
		for (i=0, i < dataResponse.length; i++) {
			nextItem = array[i+1];
		};
	} else {
		function extractString; //not sure i this shuld be here becauser I htink that this should be added into the checkAndStore look
	};
	}; // what is wrong here???
};