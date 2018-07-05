// 	// Replace ./data.json with your JSON feed
// fetch('https://seasoned.atlassian.net/rest/agile/1.0/board/21/sprint/70/issue?fields=timetracking').then(response => {
//   return response.json();
// }).then(data => {
  
//   console.log(data);
// }).catch(err => {
//   window.alert('Sorry. An error was thrown.')
// });

	// Replace ./data.json with your JSON feed
fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  
  console.log(data);
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});