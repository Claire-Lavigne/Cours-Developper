# NPM INSTALLATION
```bash
npm init
# press enter various times (add metadata later in package.json)
npm install

# install npm packages, 3 options :
# install on machine, useful for command line interface tools
npm install -g <package>
# install locally to project, save as production dependency, useful for making code work in production environment
npm install <package> --save
# install locally to project, save as development dependency, useful if no longer required after project launched
npm install <package> --save-dev

# when packages installed locally, node_modules is created
# add node_modules to ignored files in .gitignore
# run npm install when cloning git repo
```
