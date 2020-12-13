const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');
const github = require('@actions/github');

const octokit = new Octokit({
    auth: core.getInput('github_token'),
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });

async function invite() {
    try {
         octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
          owner: core.getInput('org-name'),
          repo: core.getInput('repo-name'),
          username: 'son7211na',
          permission: 'push'
          });
        
        } catch (error) {
            console.log(error);
        }
    

invite();


// permission can be one of : pull, push, admin, maintain, triage
