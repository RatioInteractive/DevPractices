# Transferring Ownership of a GitHub repository

We don't want to fork the repository because that would imply a relationship with the original one.
Instead we'll create a new repository on GitHub, push the current HEAD revision to it and transfer
ownership to the client.

**Old Repository:** http://github.com/RatioInteractive/SomeCoolProject  
**New Repository:** http://github.com/RatioInteractive/GoodbyeSomeCoolProject

```
$> git clone http://github.com/RatioInteractive/SomeCoolProject
$> git remote remove origin
$> git remote add origin http://github.com/RatioInteractive/GoodbyeSomeCoolProject
$> git push origin --all
$> git push origin --tags
```

The new repository mirrors the old repository, but doesn't have a reference to it. Now we can
transfer ownership of the new repository to the client. Transferring ownership is done through
the repository settings on GitHub.
