// 	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*		

// ***PART ONE
// GETTING THE DATA ATTEMPTS

// ATTEMPT 1
// fetch('https://seasoned.atlassian.net/rest/agile/1.0/board/21/sprint/70/issue?fields=timetracking').then(response => {
//   return response.json();
// }).then(data => {
  
//   console.log(data);
// }).catch(err => {
//   window.alert('Sorry. An error was thrown.')
// });

// // ATTEMPT 2
// let dataResponse;
// fetch('data.json').then(response => {
// 	return response.json();
// }).then(data => {
// 	console.log(data);
// 	dataResponse = data.issues;
// 	return dataResponse;
// }).catch(err => {
// 	window.alert('Sorry. An error was thrown.')
// });

//get the data file

//***THIS ONE WORKS

let dataResponse;		//this is the variable for the data retrieved so that we can manipulate the data later on.

// let datafromJSON = JSON.parse('data.json');
// let dataFromJSON1 = JSON.parse('/data.json');
// console.log('datafromJSON: ', datafromJSON);
// console.log('datafromJSON1: ', datafromJSON1);


function fetchJsonArray () {
return fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  console.log('data from response: ', data);
  dataResponse = data;
  return dataResponse;
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});	
}		//the function to retrieve the data













// 	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*		

// ***PART TWO
// EXTRACT STRING FUNCTION ATTEMPTS


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

// let str; //this is the variable that defines the string that has been pulled from between "name=" and ",goal="


// function extractString(){
// 	var str = dataResponse.fields.customfield_10115;
// 	str.split('name=').pop().split(',goal=').shift();
// 	var subStr = str.split('name=').pop().split(',goal=').shift();
// 	return subStr;
// }

// ***THIS ONE WORKS

function extractString(foo){
	// return foo.split('name=').pop().split(',goal=').shift();
	let subStr = foo.split('name=').pop().split(',goal=').shift();
	console.log(subStr);
	return subStr;
}


let foo = fetchJsonArray().then(dataArray => {
	console.log('[0].fields.customfield_10115[0]: ', dataArray[0].fields.customfield_10115[0]);
	let bar = extractString(dataArray[0].fields.customfield_10115[0]);
});

// var str = dataResponse[0].fields.customfield_10115[0]; //this was recieving issue when the fetch wasn't a function because the promise had not finished by the time the javascript had reached this line. It was able to keep going while the promise was comopleted so DataResponse was not defined yet.
// var str2 = dataResponse[1].fields.customfield_10115[0];


// extractString(str);
// extractString(str2);













// 	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*		

// PART FOUR 
//

let nameOfSprint = []; //this is the array that will hold the strings that were pulled (the names of the sprints)
 
function checkAndStore(){
	for (i=0, i < dataResponse.length; i++) {
		extractString(str); // this function will not have to be in its own loop bc this way it does one string at a time
		if(nameOfSprint.includes(str)){

		} else {

			nameOfSprint.push(str);
		}
		var i = i+1;
	}
	return nameOfSprint;
	// if(str)
}

function addNewkeyVlaue(array) { //dataResponse.fields
    let newArr = [];
    let sprintName;
    let newObj;
    loop in array {
        sprintName = extractString(array[i].customfield_10115[0]); //'CMS V2'
        newObj = Object.assign();// {customfield_10115: ['sssss'], timemestimate: 30}, sprint: sprintName}
        newArr.push(newObj);
    } 
    return newArr;
}

function enterDataIntoTable() { 
	if(dataResponse.fields.timeestimate === 0) then {  
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