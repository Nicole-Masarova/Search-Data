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

let nameOfSprint;

function enterDataIntoTable() {
	if() then{
		//insert code for if the status is ACTIVE
		if onlyTimeTrackingArray.fields.timeestimate === 0 then {
			for (var i = 0; i < dataResponse.length; i++) {
				nextItem = array[i+1];
			};
		} else if {
			for (var i = 0; i < dataResponse.length; i++) {
				nextItem = array[i+1];
			};
		} else {

		};
		//insert code for if it is not ACTIVE
	};
};



