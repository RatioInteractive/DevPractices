GitHub Basics
=============

Installing Git and GitHub
-------------------------

### Get your account

All of Ratio's projects are stored on [GitHub](https://github.com/). Signing
up for an account is free, and requires only your email address. Once you have
an account you'll need to contact your practice lead to get added to the 
Ratio GitHub profile before you can start cloning and commiting to Ratio projects.

If you already have a GitHub account, use that! The profiles will be kept separate,
and you'll only have to maintain one login. Sweet!

### Configure your SSH keys

GitHub is a secure host, which means you'll need to be authenticated to use your
account from your development machine. Configuring and registering your SSH keys
with GitHub is outside the scope of this doc, but fortunately GitHub has a great
reference for Windows, Mac and Linux users:

* [Generating SSH Keys for GitHub](https://help.github.com/articles/generating-ssh-keys)

### Download the desktop client

The easiest way to get up and running is to download one of the desktop
clients. Not only will this give you a friendly GUI to get started with,
it will also install the command-line tools you need to run Git in PowerShell
or Terminal.

* [GitHub for Windows Desktop Client](http://windows.github.com/)
* [GitHub for Mac Desktop Client](http://mac.github.com/)

Further Reading
---------------

Git is a pretty intuitive version control system, but just like any other technology
getting comfortable with it requires a bit of experimentation and research. These
references will help to answer questions you might have after reading these docs.

* [Git official site (Git-SCM)](http://git-scm.com)
* [In-browser command-line tutorial](http://try.github.io)
* [GitHub Help pages](https://help.github.com)

Terminology
-----------

### Repository

Git is a distributed version control system, which means that every project clone
is its own fully-qualified repository. Usually the repository on GitHub under
the [RatioInteractive](https://github.com/RatioInteractive) account is the main
repository, and should be kept pristine.

### Remotes

Any repository can be connected to any other repository as a _remote_. The repository
you're working from is referred to as the _local_ repository, and by convention the 
repository it was cloned from is called _origin_. Repositories can have any number
of remotes, but to follow this doc you won't need more than _origin_.

### Stage

While your editing a file, the changes you make will no longer be tracked by Git. 
Before you can make those changes permanent, you'll need to tell Git that you want
to commit them by adding them to the stage.

### Commit

Once all of your changes have been staged then you're ready to make them a permanent
part of your file history by committing them.

### Push

Changes committed to your _local_ repository will **only** appear in your _local_ repository's 
file history. You'll need to push them to the _origin_ repository before they are persisted
on the server.

### Pull

To keep your _local_ repository in sync you'll have to pull changes down from the _origin_
repository from time to time.

### Log

The log is a running history of commits. Every repository keeps its own log, and two repositories
are considered "in sync" when their logs are equivalent.

### Hash (SHA-1)

Each entry in the commit log has it's own unique hash key. If you ever need to reference or
roll back to a previous commit, you'll identify it by this key. Oftentimes you won't have to
refer to the entire key; the first 7 or so characters are enough to identify the commit:

```bash
# These all refer to the same commit
$ git show 1c002dd4b536e7479fe34593e72e6c6c1819e53b
$ git show 1c002dd4b536e7479f
$ git show 1c002d
```

Command-line Basics
-------------------

### Cloning a repository

```bash
$ cd /path/to/your/projects/dir
$ git clone https://github.com/RatioInteractive/CoolProjectBro.git
$ cd ./CoolProjectBro
```

### Keeping your repository in sync

```bash
$ git pull origin master
```

### Staging files for commit

```bash
$ git add /an/entire/directory
$ git rm -r /an/unwanted/directory
$ git status
```

### Committing files locally

```bash
$ git commit -m 'Fix all the things!'
```

### Reviewing your commit history

```bash
$ git log
$ get log --pretty=oneline
```

### Pushing your files to the remote repository

```bash
$ git push origin master
```

## Merging and Resolving Conflicts

## Branching
