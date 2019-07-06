# Some links

* [Download Git](https://git-scm.com/downloads)
* [Gist : share code](https://gist.github.com)
* [Learn about Git & commands](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
* [Learn with OpenClassrooms](https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github)
* [Commands help](https://gist.github.com/jedmao/5053440)
* [Commands help](https://github.com/joshnh/Git-Commands)
* [Commands help](https://dev.to/dhruv/essential-git-commands-every-developer-should-know-2fl)

# Most used commands

### Connexion
```bash
$ git config --global user.name "User Name"
$ git config --global user.email user@email.com
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

# Copy remote repo to local repo
# Someone else repo : GitHub --> Issues --> Fork --> Clone --> Copy https key
# Personnal repo    : GitHub --> Create repo --> Clone --> Copy https/ssh key
# HTTPS => in order to connect on Terminal (indicate user + mail)
# SSH   => if already connected on Terminal
$ git clone <url>
$ git init
```

### Generate SSH Key
```bash
# Generate SSH Key
$ ssh-keygen -t rsa -b 4096 -C "user@email.com"
# copy key
$ pbcopy < ~/.ssh/id_rsa.pub
# copy key (if command not found with pbcopy)
$ cat < ~/.ssh/id_rsa.pub
# Go to GitHub/Profile Photo/Settings/SSH and GPG keys/New SSH key
# Paste key and add
```

### Git branch
```bash
$ git branch    # see which branch I'm in
$ git checkout <branchname>     # go to that branch
$ git checkout -b   # create and go to that branch
$ git log --graph --decorate --oneline --all    # graph of all branches and commit
```

### Git status
```bash
$ git status
# not a git repo                = must init git
# untracked files               = must add files
# changes to be commited        = must commit
# nothing to commit             = ok
```

### Git add (Stage - Add changed files to local repo)
```bash
$ git add .                     # add all files
$ git add <file>                # add that specific file
$ git add -p (+ y or n)         # see new changes and accept/refuse to add
$ git rm --cached <file>        # undo added file
$ git stash                     # save changes but not for commit
$ git stash list                # see all files saves
$ git stash pop                 # recup files saved to work on them again (et vide le stash)
$ git stash apply               # recup files saved to work on them again (sans vider le stash)
```

### Git commit
```bash
$ git commit -m "message"       # message for commit
$ git commit -a -m "message"    # add and commit all files already staged
$ git commit --amend            # change commit message
$ git log                       # list all commits on branch (SHA, who, when, what ; most recent < oldest)
                                # Press Q to quit "log"
$ git log --graph               # git branch timeline view
$ git checkout SHA              # come back to good commit to fix bug
$ git checkout master           # revenir au commit le + récent
$ git revert HEAD --no-edit     # undo commit (saves corrective mistake as a new commit)
```

#### Other commands for commits
```bash
git reset --soft                # Undo last commit to stage more files
git reset --soft HEAD~3 ?????   # Go back to the last three commits without lose the files stored
$ git reflog                    # list all actions & commits on local repo
$ git blame master -- file      # list all actions & commits of team members (lines added in source code)
$ git rev-list                  # list historic and actions made on a specific file
```

#### Other commands again
```bash
$ git revert SHA                # undo this commit (and save correction into new commit)
# Option 1
$ git push origin +master                             # forces push to remote repo
# Option 2
$ git push <repo name> +<badcommitSHA>^ : <branch>    # Delete a specific commit using git push
# Exemple : git push myrepo +12345^:master
$ git push <repo name> :<branch name>                 # Delete entire branch

$ git cherry-pick e5be498bd5e3d2a58cdc6d21e150e00ed6b06b3f      # add that commit to actual branch

https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github/exercises/3406
```

### Git push (send to remote) / pull (take from remote)
```bash
$ git push <remote> <branch>    # remote = origin ; branch can be master or the branch I worked on
$ git pull <remote> <branch>    # remote = origin ; branch can be master

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

### Git branch
```bash
$ git branch                    # list all branches created + actual branch
$ git branch -a                 # list all branches of repo + actual branch
$ git checkout <branch>         # switch to indicated branch
$ git checkout -b <branch>      # create and switch to indicated branch
$ git branch -d <branch>        # Remove branch unwanted
$ git merge <branch>            # branch I want to merge (from branch that all will be merged in)
$ git remote prune origin --dry-run   # List all orphaned branches (local ones that doesn't exist remote)
$ git remote prune origin             # Delete the branches
````

#### Clean branch (Organize commits & branches, renamme commits, keep commits I want)
```bash
$ git rebase -i master        # List all commits and open text editor
# in text editor, tape all commits you want to combine in one
# keep word "pick" for the commit that will stay
# change the word "pick" for "squash" for all commits that will move into the "pick commit"
# add a descriptive message in "pick commit"
pick fda59df commit 1 this is my descriptive message
squash x536897 commit 2
squash c01a668 commit 3
squash 8a9fbd7 commit 4
```

#### Remove untracked branches
```bash
$ interactive git rebase    # => git rebase -i HEAD~3
# Manually delete outdated pointers (commits, branches and objects) :
# Open .git file in local repo, look at folders "objects", "index" and "ref"
```

### See modifications
```bash
git blame <file.ext>        # Voir toutes les modifications de chaque auteur sur le fichier
git log                     # Comprendre (option1) Regarder le SHA voulu pour voir le message du commit
git show SHA                # Comprendre (option2) Voir en détail les modifications de l'auteur sélectionné

```

### Debug repo
```bash
$ git blame
$ git blame -C filename     # To find the bug in some line of the file
# Can't find the bug :
$ git bisect start
$ git bisect bad            # Track the bugs
$ git bisect good           # When the clean commit shows
# Find the bug : Test & annotate commits
```
