// ATTEMPT 1
// fetch('https://seasoned.atlassian.net/rest/agile/1.0/board/21/sprint/70/issue?fields=timetracking').then(response => {
//   return response.json();
// }).then(data => {
  
//   console.log(data);
// }).catch(err => {
//   window.alert('Sorry. An error was thrown.')
// });


// ATTEMPT 2
// fetch('data.json').then(response => {
//   return response.json();
// }).then(data => {
  
//   console.log(data);
// }).catch(err => {
//   window.alert('Sorry. An error was thrown.')
// });

get data.json .... //get the data file

// FUNCTION

let x = document.getElementById("ProjectNameInput");
let y = document.getElementById("BoardNameInput");
let timetracking = 'fields.timetracking';

let onlyTimeTrackingArray = [];

for(i=0, i<data.length, i++){
	if x === 'issues.key' then(){
			onlyTimeTrackingArray.push(data[i].fields.timetracking);
	};
};

return onlyTimeTrackingArray;
