function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const owner = 'kpediad';
  //use fetch to fork it!
  fetch(
    `api.github.com/repos/${owner}/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
   .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const link = `<a href="${json.html_url}">${json.name}</a>`;
  document.getElementById('results').innerHTML += link;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
