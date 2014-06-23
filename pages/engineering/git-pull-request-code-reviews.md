#Pull Request Code Reviews

##Overview
The following documentation describes a recommended process for performing code reviews via checking out GitHub Pull Requests locally.

##Code Review Process
The code review process should be an integral piece of any multi-developer, production-worthy software development effort.  In general, a code review is just that - a review of code.  It is intended to find and fix mistakes overlooked in the initial development phase, improving both the overall quality of software.  In the context of GitHub more specifically, the general recommended flow is this:

1. Developer A submits a Pull Request containing one or more commits from their local repository (branch or fork)
2. Lead Engineer or Developer B checks out Developer A's Pull Request to a read-only branch of their own local repository
3. Lead Engineer or Developer B runs all unit tests, builds and runs source code, performs smoke test, integration tests, etc. in order to verify overall quality and stability of Developer A's work prior to merging into main line
4. Lead Engineer or Developer B communicates feedback and/or specific notes via the Pull Request interface on the GitHub website
5. Developer A resolves any issues communicated by Lead Engineer or Developer B and re-submits Pull Request with additional changes if necessary
6. Lead Engineer or Developer B approves Pull Request once acceptable, checks changeset against subsequent Pull Request merges, and merges changeset into main line

##Checking Out a GitHub Pull Request Locally
In order to facilitate this code review process, GitHub provides the ability to check out Pull Requests locally into a read-only branch the reviewer can use to run unit tests and utlimately the code itself.  Reviewing and commenting on the code via the GitHub website is a great way to communicate review status and notes between developers, but to truly validate a Pull Request against merge issues, bugs and regressions prior to merging into the main line, the Pull Request changeset needs to be physically built/run/smoke-tested, etc. by someone other than the author of the changeset.

Here is how GitHub facilitates checking out Pull Requests for this process specifically:
https://help.github.com/articles/checking-out-pull-requests-locally

The overall process is as follows:

1. Modify your .gitconfig file according to the instructions in the article
2. Do a git fetch from origin, which will fetch all the pull requests from your repo
3. Checkout the target pull request to your own local branch (you can name the branch anything you want, but it probably makes sense to name it according to the PR number…I followed the convention pr-#) `git checkout -b 999 pull/origin/999`
4. Once the code review has been completed successfully and the PR merged/closed, you can delete the branch to avoid branch overload locally

###Forking Considerations
It is important to note that the Pull Request checkout method documented above assumes your local repository is not a fork of the master/upstream (main) repository.  If your repository is a fork, you will need to have an "upstream" remote configured, and enter the refs configuration in the upstream remote section of your .gitconfig file rather than origin.  Also, assuming your upstream remote is called "upstream", you will want to replace references to "origin" with upstream described in the above documentation.
