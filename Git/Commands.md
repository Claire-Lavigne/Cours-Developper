* [Download Git](https://git-scm.com/downloads)
* [Gist to share code](https://gist.github.com)
* [Learn about Git & commands](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
* [Learn with OpenClassrooms](https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github)
* [Commands help](https://gist.github.com/jedmao/5053440)
* [Commands help](https://github.com/joshnh/Git-Commands)
* [Commands help](https://dev.to/dhruv/essential-git-commands-every-developer-should-know-2fl)

## Most used commands
```bash
# Connexion
$ git config --global user.name "User Name"
$ git config --global user.email user@email.com

# Start local repo in wanted folder
$ git init

# Copy remote repo to local repo
# Someone else repo : GitHub --> Issues --> Fork --> Clone --> Copy https key
# Personnal repo    : GitHub --> Create repo --> Clone --> Copy https/ssh key
$ git clone <url>

# Check files status
$ git status
# not a git repo                = must init git
# untracked files               = must add files
# changes to be commited        = must commit
# nothing to commit             = ok

# Stage - Add changed files to local repo
$ git add .                     # add all files
$ git add <file>                # add that specific file
$ git add -p (+ y or n)         # see new changes and accept/refuse to add
$ git rm --cached <file>        # undo added file
$ git stash                     # save changes but not for commit
$ git stash list                # see all files saves

# Commit
$ git commit -m "message"       # message for commit
$ git commit --amend            # change commit message
$ git log                       # list all commits on branch (who, when, what was commited)
$ git log --graph               # git branch timeline view
$ git checkout commitnumber     # come back to good commit to fix bug
$ git revert HEAD --no-edit     # undo commit (saves corrective mistake as a new commit)

# push (send to remote) / pull (take from remote)
$ git push <remote> <branch>    # remote = origin ; branch can be master
$ git pull <remote> <branch>    # remote = origin ; branch can be master
# Open source project : on Github, pull request to owner repository + add description (ex : for issue resolved)

# branches
$ git branch                    # list all branches created + actual branch
$ git branch -a                 # list all branches of repo + actual branch
$ git checkout <branch>         # switch to indicated branch
$ git checkout -b <branch>      # create and switch to indicated branch
$ git branch -d <branch>        # Remove branch unwanted

# merge branches
$ git merge <branch>            # branch I want to merge (from branch that all will be merged in)
```





## Other commands
```bash
git reset --soft HEAD~3 ?????
$ git reflog                    # list all actions on local repo
$ git blame master -- file      # list all actions of team members (lines added in source code)
$ git rev-list                  # list historic and actions made on a specific file
```

```bash
# generate SSH key
$ ssh-keygen -t rsa -b 4096 -C "user@email.com"
# copy key
$ pbcopy < ~/.ssh/id_rsa.pub
# copy key (if command not found with pbcopy)
$ cat < ~/.ssh/id_rsa.pub
# Go to GitHub/Profile Photo/Settings/SSH and GPG keys/New SSH key
# Paste key and add
```

Curious about how this works? When you use the command  git commit, the files you commit are encrypted using an SHA hash algorithm. It generates a 160-bit character string, called...a hash! 😉 This hash is used as a unique identifier for your commit; for example, "95465b434372cc102f9deadbeef335d9abaa99b75."

For example, if your mistaken commit was 12345, you would type in this super safe command:

git revert 12345
Then you can do one of two things:

Option 1: Use git push origin +master. The+ sign  forces the push to the remote repository.  

Option 2: Delete a specific commit using git push.  The command is  git push <repo name> +<badcommithash>^ : <branch>.  Let’s say that the name of your repo is myrepo, and the hash for the commit you want to delete is 12345. Your command will look like this:

git push myrepo +12345^:master

You can also delete an entire branch using git push <repo name> :<branch name>.

It's important to note that this push will make the required changes for your pull request and a direct push to a GitHub repository.  If you use this command directly on the master branch, the change will also show in the commit history.

```

````
remote access not working?
git push origin master =  "Permission denied"
On Windows, you can go to Control Panel -> User Accounts -> Manage your credentials -> Windows Credentials.  Then click Remove:
On Mac, the credential store is on the osxkeychain
On Linux, you would use the following command to remove your old credentials:git config --global --unset credential.helper

Now when you try to run git push origin wwbranch again, you will get the GitHub login screen, and you'll just have to log into your account. Easy peezy! 😎

User your Github account credentials to log in
That's it!  You should see the remote connection validated at this point, and your code should push to GitHub.

Git version issues with SSH
Sometimes you don’t get time to update your version of Git that you use on your local computer. Then Git Bash won’t let you push your latest changes to the remote repository because of the OpenSSH and OpenSSL version. 😡
Always update your OpenSSL and OpenSSH for Git!
You see, OpenSSH and OpenSSL versions are important to keep updated, so you are working with the latest security updates on Git Bash.  All you have to do is reinstall Git with the latest security updates and SSH version.

You can do that by getting the latest version of Git on the Git website and downloading it. When you install, it will upgrade your version so you can go back and push that local repo to GitHub.

git cherry-pick e5be498bd5e3d2a58cdc6d21e150e00ed6b06b3f   add that commit

git cherry-pick can add a commit from one branch to yours. 
https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github/exercises/3406





Git merge and git rebase combine the commit histories of two branches, but have different ways of doing it. 

Never use git rebase on a public repository or a branch that others are working on.

Git rebase adds one branch on top of the other with new commits.

Interactive git rebase can be used to manipulate commit history, change commit messages, combine (squash) commits together, and specify which commits you would like to include in the rebase.



### Combine branches
```bash
$ git pull --rebase           # Update local repo with new commits on the master remote
$ git checkout namebranch     # Verify my branch is here
$ git rebase master namebranch
$ git checkout master
$ git merge namebranch
$ git push
```

### Remove branches
```bash
$ git remote prune origin --dry-run   # List all orphaned branches (local ones that doesn't exist remote)
$ git remote prune origin             # Delete the branches
````

### Clean branch (Organize commits & branches, renamme commits, keep commits I want)
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

### Remove untracked branches
```bash
$ interactive git rebase
# Manually delete outdated pointers (commits, branches and objects) :
# Open .git file in local repo, look at folders "objects", "index" and "ref"
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
