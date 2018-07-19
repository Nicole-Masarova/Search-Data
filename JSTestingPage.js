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

var str = dataResponse[i].fields.customefield_10115[0];
str.split('name=').pop().split(',goal=').shift();
//returns the name of the Sprint