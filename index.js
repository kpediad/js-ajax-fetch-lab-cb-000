function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '31aff20e15e764abd7fb346c0746f30d3813a057';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const owner = 'kpediad';
  //use fetch to fork it!
  fetch(
    `https://api.github.com/repos/${owner}/${repo}/forks`,
    {
      method: POST,
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
   .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
