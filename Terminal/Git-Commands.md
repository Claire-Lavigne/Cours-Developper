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

# Créer des alias de commandes
$ git config --global alias.st status # git st
$ git config --global alias.lg "log --color --graph --pretty=format:'%C(red)%h %C(white)- %s %C(bold blue)(%an)' --abbrev-commit" # git lg
$ git config alias.cm '! cm() { git commit -m "$*" ; } ; cm' # git cm My long message
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
# Check if I have a public SSH Key on my pc
$ ls ~/.ssh/*.pub
# copy key ("cat" or "pbcopy")
$ cat < ~/.ssh/id_rsa.pub
# Go to GitHub --> Profile --> Settings --> SSH and GPG keys --> New SSH key
# Copy and Paste key
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
$ git branch                            # LIST my created branches
$ git branch -a                         # LIST all repo branches
$ git checkout <branch>                 # SWITCH to indicated branch
$ git checkout -b <newbranch>           # CREATE and SWITCH to indicated branch
$ git checkout --track origin/name      # DOWNLOAD and SWITCH to the remote branch indicated
$ git switch <branch>                   # SWITCH to indicated branch
$ git switch -c <newbranch>             # CREATE and SWITCH to indicated branch
$ git branch -m <oldbranch> <newbranch> # RENAME branch
$ git branch -c <oldbranch> <newbranch> # COPY branch
$ git branch -D <branch>                # DELETE (force) local branch
$ git push origin -D <branch>           # DELETE (force) remote branch
$ git merge <branch>                    # MERGE one branch in my current branch
$ git remote prune origin --dry-run     # LIST all orphaned branches (local branches that don't exist remote)
$ git remote prune origin               # DELETE the branches
```
#### Move changes on wrong branch to good branch
```bash
$ git stash save "message"
$ git checkout -b <goodbranch>
$ git stash pop
```

### STAGE (Add files in local repo)
```bash
$ git add .                     # ADD all files
$ git add <file>                # ADD that specific file
$ git add -p (+ y or n)         # SEE new changes and accept/refuse to add
$ git reset <file>              # UNDO git add <file> before a commit
$ git reset                     # UNDO git add before a commit
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
$ git revert                    # undo last commit (saving correction as a new commit) - SAFE FOR PUBLIC BRANCH
$ git revert SHA                # undo this commit (saving correction into new commit) - SAFE FOR PUBLIC BRANCH
$ git reset HEAD                # undo uncommitted changes
$ git reset --soft              # undo last commit to stage more files - FOR PRIVATE BRANCH ONLY
$ git reset --soft HEAD~3       # same (go back to the fourth last commit) - FOR PRIVATE BRANCH ONLY
$ git checkout <SHA>            # come back to good commit to fix bug
$ git checkout master           # revenir au commit le + récent
$ git cherry-pick <SHA>         # add commit from another branch to actual branch
$ git show --name-only SHA      # See files modified in commit
$ git diff-tree --no-commit-id --name-only -r <SHA>   # See files modified in commit
```
#### Graph
```bash
$ git log                       # SEE all commits on current branch
$ git log --oneline             # idem but PRETTY
ca82a6d starting layout
$ git log --pretty=format:"%h - %an, %ar : %s"
ca82a6d - Scott Chacon, 6 years ago : starting layout

$ git reflog                    # LIST local actions & commits
$ git show <SHA>                # SEE code modifs
$ git blame <file>              # SEE code modifs + author + SHA
```
#### Undo commits pushed
```bash
$ git reset --hard SHA          # undo all commits pushed before SHA indicated (local changes)
```
#### Modif commits history with text editor
```bash
# List commits
$ git rebase -i --root
$ git rebase -i HEAD~3
# Modif and save
```

### PUSH (from local to remote) / PULL (from remote to local)
```bash
$ git push                      # PUSH current branch
$ git fetch                     # DOWNLOAD branch changes from remote
$ git pull                      # PULL remote branches
$ git push +branchname          # force PUSH for everyone
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
$ git count-objects -vH # see repo size before gc
$ git gc --prune=now
$ git count-objects -vH # see repo size after gc
```
[More commands](https://stackoverflow.com/questions/10067848/remove-folder-and-its-contents-from-git-githubs-history)

### Kill running port
```bash
$ npx kill-port 3000
```
