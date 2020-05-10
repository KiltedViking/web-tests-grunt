# Clear Git History

How to clear Git history by deleting master branch. ;-) Cut from page below (so to not loose if page or site disappears).

https://www.shellhacks.com/git-remove-all-commits-clear-git-history-local-remote/


## Create a temporary branch and checkout:

```bash
git checkout --orphan temp_branch
```

Option	    Description
------      -----------
`--orphan`	Create a branch in a git init-like state


## Add all files to the temporary branch and commit the changes:

```bash
git add -A
git commit -am "The first commit"
```

## Delete the master branch:

```bash
git branch -D master
```

## Rename the temporary branch to master:

```bash
git branch -m master
```

## Forcefully update the remote repository:

```bash
git push -f origin master
```