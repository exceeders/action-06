const { Octokit } = require("@octokit/rest");
const core = require('@actions/core');
const github = require('@actions/github');

const octokit = new Octokit({
    auth: core.getInput('admin_token'),
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });

async function invite() {
    try {
        await octokit.request('PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}', {
            org: core.getInput('org-name'),
            team_slug: 'team1',
            owner: core.getInput('org-name'),
            repo: core.getInput('repo-name'),
            permission: 'push'
          });
        
        } catch (error) {
            console.log(error);
        }
    
    }
invite();

// https://docs.github.com/en/free-pro-team@latest/rest/reference/teams#add-or-update-team-repository-permissions
// permission can be one of : pull, push, admin, maintain, triage
