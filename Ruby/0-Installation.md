## [Installer Ruby](https://openclassrooms.com/en/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby/2915056-installez-vos-outils#/id/r-2992491) - [Installer Rails](https://openclassrooms.com/en/courses/3149156-initiez-vous-a-ruby-on-rails/3149171-installez-ruby-on-rails#/id/r-3324757)

```bash
# Installer homebrew (si besoin)
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Voir la liste des outils de développement installés - Mettre à jour
brew list
brew update

# Installer rbenv
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bashprofile
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
source ~/.bash_profile

# Installer (si nécessaire) rbenv - gestionnaire versions Ruby - Node.js - Yarn
brew install rbenv ruby-build node yarn

# Installer Ruby [voir dernière version stable](https://www.ruby-lang.org/en/downloads/)
rbenv install 2.6.3
rbenv global 2.6.3

# Installer Rails [voir dernière version stable](https://rubygems.org/gems/rails/versions) / Mettre à jour
gem install rails   # sudo gem install rails if not working (not recommended)
gem update          # sudo gem update (idem)

# Vérifier versions
rbenv -v
ruby-build -v
node -v
yarn -v
ruby -v
rails -v
```
