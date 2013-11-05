Commit Best Practices
=====

###Branch and Rebase 
From the master branch, create a local dev branch with `git checkout -b <username>` Switch to your branch with `git checkout <username>` for general dev work. 

Follow this workflow when you are ready push your commits to the rest of the team:

    git checkout master
    git pull (expect no conflicts or merge commits if you didn't make changes to master)
    git checkout dev
    git rebase master (resolve conflicts, option to cancel here)
    git checkout master
    git merge dev
    git push

This flow will guarantee that all of your local changes are added to the repo in the expected order and that you wont see merge commit messages like `Merge branch 'master' of <repo>`, where it is impossible to tell who changed what when.

###When Committing...
* **Review your changes.** Use a graphical diff tool to ensure _every change_ is intended.

* Commits should be granular enough that one sentence can sufficiently describe them.

* Include the bug number when committing a fix, and describe what was wrong.

* Do not commit large swaths of commented out code.

* Sync early and often.

* Do not commit code with derogatory comments or swearing, do not swear or complain in commit messages.

###Commit Messages
#####Good examples:
* _Adding support for login_

* _Fix bug 12345 - exceptions were not being handled when trying to login without supplying credentials._

#####Bad examples:
* _fixed a bug_

* _Adding support for login, fixing a bug with collections, removing some old code and starting the detail page_

The last example is bad because it means the commit is touching a large amount of code. If that commit has to be rolled back or more commonly merged, it will be a larger headache.



