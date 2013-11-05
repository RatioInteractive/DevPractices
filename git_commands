Git Commands
=============

Common
----------

    git pull origin master
    git add .
    git commit -m 'your commit message'
    git push origin master

#####Revert uncommitted changes, remove untracked files and folders
    git reset --hard
    git clean -fd

#####Stash so you can pull without committing
    git stash
    git stash apply (restore last stashed changes)
    git stash list (show stashed changes)
    git stash apply stash@{ [stash number] }  (apply a specific stashed change)

#####Checking out an earlier commit
    git checkout <commit hash>

#####Getting back to the HEAD
    git checkout master


Branching
----------
#####Create a local branch
    git branch <branch>

#####Switch to a branch
    git checkout <branch>

#####Pull a remote branch
    git fetch origin <branch>

#####Push branch to remote
    git push origin <branch name>

#####Rename a branch
    git branch -m old_branch new_branch

#####Delete remote branch
    git push origin :<branch name>

#####Create a local branch tracking a remote
    git checkout --track origin/<branch>

#####Merge from a branch
    git checkout master
    git merge <branch>
    git branch -d <branch> (deletes local branch)

#####Overwrite master with a branch
    git checkout <branch>
    git merge -s ours master
    git checkout master
    git merge <branch>

#####Pull a single commit from one repo
    git cherry-pick <commit hash id>


Remotes
-----------------------
#####If your origin is not configured correctly, remove it, then add it again
    git remote rm origin
    git remote add origin <repo url>

#####Rename a remote
    git remote rename <old> <new>

#####Add another repo as a remote
    git remote add <2nd repo name> <2nd remote repo url>


#####pull changes from 1st repo, push to 2nd repo
    git pull <1st repo name > master
    git push <2nd repo name>


Ignore
-------------------------
#####ignore a file
    echo "fileName" >> .gitignore

#####ignore a folder
    echo "/folderName" >> .gitignore

#####remove a file from git, but keep it locally
    git rm --cached <fileName>

#####remove a folder and its contents from git, but keep it locally
    git rm -r --cached <folderName>


#####Create the remote repo, add it as the new remote origin 
    git remote add origin <new remote repo>
    git push origin master

Tagging
----------
#####create a tag
    git tag 1.0.0.0 -m 'some note about this tag'

#####push tag to remote
    git push --tags

#####delete a tag  (remote)
    git tag -d v1.0.0.0
    git push origin :refs/tags/1.0.0.0

Sub Modules
----------
#####Add a submodule to a project
    git submodule add <submodule repo> [relative/submodule/folder/path]

#####Update the submodule (or cloning a project with a submodule in it)
    git submodule update --init --recursive

#####Removing a submodule (below code removes all)
    git rm .gitmodules
    git config -f .git/config --remove-section submodule.<path/to/submodule> (repeat as necessary per submodule)
    git rm --cache ./<path/to/submodule> (repeat as necessary per submodule)
    git commit -m 'removing submodules'

Diagnosing problems
-------------------------
#####See when a file was deleted
    git log -1 -- [file path]

#####So you don't have to enter your username all the time
    git config --global user.name "userName"
    git config --global user.email "you@ratiointeractive.com"

#####make "git pull" default to 'origin master'
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master

#####changing remote url from http to ssh (or vice versa)
    git remote set-url origin <ssh or http url>
