Versioning for Release 
===

Create a Release Candidate (RC) branch off Master.

	git checkout --track origin/<branch>

Continue feature work on Master.  Fix RC bugs in Master first, then cherry-pick the fixes into the RC branch (grab the specific bug fix commit, do not merge all commits).

	git checkout <branch>
	git cherry-pick <commit hash>

After successful release, tag the branch with a descriptive note mapping the version number to the release date. Delete the RC branch.

	git tag 1.0.1.0 -m 'Release 2, submitted 8-6'
	git push --tags
	git push origin :<branch>
