# Some links

* [Download Git](https://git-scm.com/downloads)
* [Gist : share code](https://gist.github.com)re
* [Learn about Git & commands](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
* [Learn with OpenClassrooms](https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github)
* [Commands help](https://gist.github.com/jedmao/5053440)
* [Commands help](https://github.com/joshnh/Git-Commands)
* [Commands help](https://dev.to/dhruv/essential-git-commands-every-developer-should-know-2fl)

# Most used commands

### Everytime
```bash
$ git branch
$ git status
$ git add .
$ git commit -m "message"
$ git pull
$ pit push
$ git checkout <branchname>
$ git checkout -b <newbranchname>
```

### Connexion
```bash
$ git config --global user.name "User Name"
$ git config --global user.email user@email.com
# tell git to always use SSH instead of HTTPS
$ git config --global url.ssh://git@github.com/.insteadOf https://github.com/
```

### Configuration
```bash
# Config Git to only push the current branch
$ git config --global push.default simple

# Get informations
$ git --help
```

### Create a repository
```bash
# Start local repo in wanted folder
$ git init
```
#### Copy remote repo to local repo
```bash
# Someone else repo : GitHub --> Issues --> Fork --> Clone --> Copy https key
# Personnal repo    : GitHub --> Create repo --> Clone --> Copy https/ssh key
# HTTPS => in order to connect on Terminal (indicate user + mail)
# SSH   => if already connected on Terminal
$ git clone <url>
$ cd <nom du repo>
$ git init
```

### Generate SSH Key and share it
```bash
# Generate SSH Key
$ ssh-keygen -t rsa -b 4096 -C "user@email.com"
# copy key
$ pbcopy < ~/.ssh/id_rsa.pub
# copy key (if command not found with pbcopy)
$ cat < ~/.ssh/id_rsa.pub
# Go to GitHub/Profile Photo/Settings/SSH and GPG keys/New SSH key
# Paste key and add

# Check if I have a public SSH Key on my pc
$ ls ~/.ssh/*.pub
# rsa.pub or dsa.pub will be listed
$ cat ~/.ssh/id_rsa.pub
# will list my key

# Share my public SSH Key
$ cd ~/.ssh/
$ cat id_rsa.pub
# Copy and share the code listed
```

### GIT STATUS
```bash
$ git status
  # not a git repo                = must init git
  # untracked files               = must add files
  # changes to be commited        = must commit
  # nothing to commit             = ok
```

### BRANCH
```bash
$ git branch                    # list all branches created + actual branch
$ git branch -a                 # list all branches of repo + actual branch
$ git checkout <branch>         # switch to indicated branch
$ git checkout -b <branch>      # create and switch to indicated branch
$ git checkout --track origin/name  # download and switch to the remote branch indicated
$ git branch -d <branch>        # Delete local branch
$ git push origin --delete remoteBranchName # Delete remote branch
$ git merge <branch>            # branch I want to merge (from branch that all will be merged in)
$ git remote prune origin --dry-run   # List all orphaned branches (local ones that doesn't exist remote)
$ git remote prune origin             # Delete the branches
```
#### Remove untracked branches
```bash
$ interactive git rebase    # => git rebase -i HEAD~3
# Manually delete outdated pointers (commits, branches and objects) :
# Open .git file in local repo, look at folders "objects", "index" and "ref"
```
#### Move changes on wrong branch to good branch
```bash
# from wrong branch
$ git stash save "message especific"
$ git checkout -b <goodbranch>
$ git stash pop
```

### STAGE (Add files in local repo)
```bash
$ git add .                     # add all files
$ git add <file>                # add that specific file
$ git add -p (+ y or n)         # see new changes and accept/refuse to add
```
#### Stash
```bash
$ git stash                     # save changes but not for commit
$ git stash list                # see all files saved
$ git stash show stash@{1}      # see files modifed in shash number without applying changes
$ git stash pop                 # recup files saved to work on them again (et vide le stash)
$ git stash pop stash@{1}       # same but on particular stash only
$ git stash apply               # recup files saved to work on them again (sans vider le stash)
```

### COMMIT
```bash
$ git commit -m "message"       # message for commit
$ git commit -am "message"      # add and commit all files already staged
$ git commit --amend            # change commit message
$ git revert                    # undo last commit (saving correction as a new commit) - PUBLIC BRANCH
$ git revert SHA                # undo this commit (saving correction into new commit) - PUBLIC BRANCH
$ git reset HEAD                # undo uncommitted changes
$ git reset --soft              # undo last commit to stage more files - PRIVATE BRANCH
$ git reset --soft HEAD~3       # same (go back to the fourth last commit) - PRIVATE BRANCH
$ git checkout <SHA>            # come back to good commit to fix bug
$ git checkout master           # revenir au commit le + récent
$ git cherry-pick <SHA>         # add that commit to actual branch
$ git show --name-only SHA      # See files modified in commit
$ git diff-tree --no-commit-id --name-only -r <SHA>   # See files modified in commit
```
#### Log (list/show all commits)
```bash
$ git log                       # see all commits on branch (SHA, who, when, what ; most recent < oldest)
$ git log --pretty=oneline      # show all commits in one line PRETTY
$ git log --graph --decorate --oneline --all    # see all branches and commit
```
#### Graph
```bash
$ git reflog                    # list all actions & commits on local repo
$ git show <SHA>                # See modifications made in lines of code
$ git blame <file.ext>          # See lines of code in file + author + SHA
```
#### Undo commits pushed
```bash
$ git reset --hard SHA          # undo all commits pushed before SHA indicated (local changes)
$ git push origin +master       # actualize the distant repo on master (/!\ for every collaborators also)
$ git push origin +branchname   # actualize the distant repo on branch (/!\ for every collaborators also)
```
#### Organize commits (rename, fusionner)
```bash
# FOR MULTIPLE COMMITS
$ git rebase -i --root        # List all commits and open text editor
# in text editor, tape all commits you want to combine in one
# keep word "pick" for the commit that will stay
# change the word "pick" for "squash" for all commits that will move into the "pick commit"
# add a descriptive message in "pick commit"
# save : maj+O and enter
# quit : maj+X
pick fda59df commit 1 this is my descriptive message
squash x536897 commit 2
squash c01a668 commit 3
squash 8a9fbd7 commit 4
$ git push origin +masterorbranchname

# FOR ONLY TWO COMMITS THAT ARE THE MOST RECENTS (FIRST COMMIT + HEAD)
$ git reset --soft "HEAD^"
$ git commit --amend
$ git push origin +masterorbranchname
```

### PUSH (send from local to remote) / PULL (take from remote to local)
```bash
$ git push
$ git push origin <branch>      # branch = master or my branch
$ git fetch                     # check if their are new changes on distant repo
$ git pull origin <branch>      # branch = master or another branch
$ git push origin +master       # force push /!\ pas sure
```
#### Cancel last push
```bash
# For remote repo :
$ git push -f origin <last good commit SHA>:<branch concerned>
# Update local repo :
$ git reset <last good commit SHA>
$ git stash
# To keep stashed modifs (if needed)
$ git checkout -b <new branch>
$ git stash pop
```
#### Undo commits pushed
```bash
$ git revert SHA                # undo this commit (and save correction into new commit)
$ git push origin +master       # forces push to remote repo
# Delete a specific commit using git push directly
# Exemple : git push myrepo +12345^:master
$ git push <repo name> +<badcommitSHA>^ : <branch>   
# Delete entire branch using git push directly
$ git push <repo name> :<branch name>                 
```

### Contribute on Open Source
```bash
# Open source project on Github :
  # fork
  # create branch
  # work on branch
  # add, commit, push branch
  # send pull request to owner of repository (on my fork, on my branch, clic on "Compare & pull request")
  # add description (ex : issue resolved)

# IF AFTER PUSH => "Permission denied"
  # Windows : Control Panel -> User Accounts -> Manage your credentials -> Windows Credentials -> Remove
  # Mac : Access credential store on the osxkeychain
  # Linux : git config --global --unset credential.helper
```

### GIT CRASH / ERROR: object file is empty
- Save directory (copy)
```bash
$ find .git/objects/ -type f -empty | xargs rm
$ git fetch -p
$ git fsck --full
```

### remove the tracked and old committed file/directory from git
```bash
# Create tracking branches of all branches
for remote in `git branch -r | grep -v /HEAD`; do git checkout --track $remote ; done

# FILTER FILE OR DIRECTORY
$ git filter-branch -f --prune-empty -d /dev/shm/scratch \ 
--index-filter "git rm --cached -rf --ignore-unmatch <FILE or DIRECTORY RELATIVE PATH>" \ 
--tag-name-filter cat -- --all

# Make git repo smaller after removing files
# Remove all references to the removed files
$ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
# Remove all reflogs
$ git reflog expire --expire=now --all
# Remove all unreferenced objects
$ git gc --prune=now
# Check out the size before/after
$ git count-objects -vH

# Push update for all branches on git repo
$ git push origin --force --all
$ git push origin --force --tags

# Update each local repo
$ git fetch origin
$ git reset --hard origin/master
$ git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
$ git reflog expire --expire=now --all
$ git gc --prune=now
$ git count-objects -vH
```
[More commands](https://stackoverflow.com/questions/10067848/remove-folder-and-its-contents-from-git-githubs-history)

### Kill running port
```bash
$ npx kill-port 3000
```
