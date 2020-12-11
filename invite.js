const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');
const github = require('@actions/github');

const octokit = new Octokit({
    auth: core.getInput('github_token'),
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });

await octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
  owner: 'org-name',
  repo: 'repo-name',
  teamname: 'team-name',
  permission: 'push'
})

// permission can be one of : pull, push, admin, maintain, triage
