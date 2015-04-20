# GitHub: Feature Development Best Practices

It's really easy to introduce bugs into a code repository while developing a new feature, or refactoring an existing one. On a team this problem becomes magnified and leads to conflicts when two devs start working in the same area of the app at the same time. Through maintaining personal repositories, and using feature branches to section of works-in-progress, the risk can be kept to a minimum.

## The process, in brief

* Create a **fork** of the original project.
* Keep your fork up-to-date.
* Develop features on their own **branch**.
* Use **pull requests** to merge your features into the original project.

## Maintain your own project forks

Creating your own fork of a project minimizes risk, and gives you the freedom to experiment without fear. If something corrupts your repository, or if you just don't want to hang onto it any longer, you can delete it and create another fork later. Maintaining your own fork also means that you can persist your branches without confusing other contributors. Sweet!

### Creating your fork

Every project in GitHub can be forked. The easiest way to create a fork is to go to the main project page on GitHub, and click the "Fork" button in the top right corner of the page:

![GitHub's "Fork" button](http://i.imgur.com/2ZGR9cJ.png)

Once forked, you will have a copy of the project with a reference to the original. In GitHub, a forked project will always include a link back to the original. Also, if the original project is private, then the fork will be private too.

![A forked project on GitHub](http://i.imgur.com/7szHJ6L.png)

### Maintaining your fork

Clone your project to your development machine the same way you would any other project. 

```
$ git clone https://github.com/ninjascribble/ICSA-Win8.git
```

`git push` and `git pull` will only affect your forked project. In order to keep your project in sync with the original, we'll have to add a `remote`. We'll call our remote "upstream." Note that the url I use links to the original repository:

```
$ git remote add upstream https://github.com/RatioInteractive/ICSA-Win8.git
```

Now you can sync your repository with the original any time you want by running:

```
$ git pull upstream master
```

You can read more about remotes here: [http://gitref.org/remotes/](http://gitref.org/remotes/)

## Develop features on branches

In Git every new project is created with a `master` branch. This is the mainline, and builds are typically created from this branch. In order to keep this branch as pure and bug-free as possible, new features should be developed in their own branches, and merged into `master` only when they are complete.

### Creating a new branch

In general a new feature branch should be created from the most recent commit on `master`. Since we're working with remotes, you want to ensure that your fork is in sync with the original project before creating your branch:

```
$ git checkout master
$ git pull parent master
```

Once master is in sync you can create your branch. Remember that you have to `checkout` your branch after it's been created before you can work on it:

```
$ git branch icsa-9999
$ git checkout icsa-9999
```

You can also use the shorthand:

```
$ git checkout -b icsa-9999
```

You can easily view a list of all your branches by running `git branch` without any arguments. The branch you currently have checked out will have an __*__ character in front of it:

```
$ git branch
* icsa-9999
master
```

### Pushing your new branch to GitHub

After you've made a few commits to your branch, you'll want to back it up on GitHub. By default, GitHub names your fork's repository "origin." You can always run this command to push your changes; If GitHub doesn't recognize the branch name it will create one for you:

```
$ git push origin icsa-9999
```

## Pull Requests

When you're done developing a feature, you'll want to merge it back into the original project. GitHub provides an incredibly nice UI that keeps a record of merges over the lifetime of the project, automatically handle merging, and even allows for discussion and review of changes beforehand.

### Creating a new pull request

From the original project look for the "Pull Requests" button on the right side of the page:

![GitHub's "Pull Requests" button](http://i.imgur.com/kI2uC2D.png)

This view displays all of the pull requests that have not yet been merged into master. You can create a new pull request by clicking the button in the top right:

![GitHub's "New Pull Request" button](http://i.imgur.com/V46Lgtg.png)

GitHub assumes that a new pull request will be a branch on the original project, but you can easily switch to your own fork and choose a branch from there instead:

![GitHub Pull Request from a fork](http://i.imgur.com/RWQUqn2.png)

The new pull request will contain a rollup of all your revisions and a diff that can be annotated by you or anyone else who has access to the project:

![New Pull Request revisions and diff](http://i.imgur.com/keLoYyU.png)

Finally, finish comment and finish your pull request:

![New Pull Request comment](http://i.imgur.com/YFuB7Tp.png)

When you create a pull request a notification will be sent out to all project participants. This gives everyone a chance to be informed of your changes, and discuss and potentially catch any issues before the code is actually merged.

### Updating a pull request

When GitHub manages a pull request, it keeps constant watch over the branch being merged into `master`. If that branch is ever updated, the pull request is updated _automatically_. Participants may not be notified when you push changes to your branch, so be sure to add a comment describing the update and the reasons behind it.

### Completing a pull request

Any contributor to the original project can merge your pull request into `master`. Use good judgement and evaluate how much time to wait between creating a pull request and merging it into `master`. When you're ready to merge, it's as simple as pressing a button:

![Merge pull request button](http://i.imgur.com/4RJUP5d.png)

Once a pull request has been merged, you can safely delete the feature branch. 
