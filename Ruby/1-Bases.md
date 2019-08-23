## [Installer Ruby](https://openclassrooms.com/en/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby/2915056-installez-vos-outils#/id/r-2992491) [et Rails](https://openclassrooms.com/en/courses/3149156-initiez-vous-a-ruby-on-rails/3149171-installez-ruby-on-rails#/id/r-3324757) dans Terminal
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
# Installer (si nécessaire) rbenv - gestionnaire versions Ruby - Node.js - Yarn + Vérifier versions
brew install rbenv ruby-build node yarn
rbenv -v
ruby-build -v
node -v
yarn -v

# Installer Ruby [voir dernière version stable](https://www.ruby-lang.org/en/downloads/) / Vérifier version
rbenv install 2.6.3
rbenv global 2.6.3
ruby -v
# Installer Rails [voir dernière version stable](https://rubygems.org/gems/rails/versions) / Mettre à jour / Vérifier version
gem install rails
# sudo gem install rails if not working (not recommended)
gem update
# sudo gem update (idem)
rails -v
```

## Bases Ruby
- Écrire code --> éditeur code : create ```nom_du_fichier.rb```, write ```puts "hello"```
- Exécuter code --> console : write ```ruby nom_du_fichier.rb```, shows ```hello```

```ruby
# commentaire

# afficher dans la console
puts "hello"

# nommage variables
nom_variable = 20

# concaténation
bravo = "Bravo " + nom_variable + " !"
bravo = "Bravo #{nom_variable} !"

# Conditions
< > <= >= == != && ||
if elsif else

# Tables
villes = [ "Paris", "Toronto", "NYC", "Rio", "Sydney", "Hong-Kong", "Berlin" ]

# Tables de hashage
voyages = { paris: 0, toronto: 7, nyc: 3 }

# Hash tables inside table
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montreal", duree: 15 }
]

# Boucle - Loop : Parcourir toutes les valeurs d'une table
villes.each do |ville|
  puts ville
end

# Boucle à répétition
3.times do 
  puts "tourner sa langue"
end
```

## Bases Rails
```bash
# Initialiser un nouveau site dans le terminal, dans un dossier appelé "castor"
rails new castor
cd castor
# Visualiser le site
rails server
# Résultat affiché similaire :
# => Booting WEBrick
# => Rails 4.2.10 application starting in development on http://localhost:3000
# => Run `rails server -h` for more startup options
# => Ctrl-C to shutdown server
# Site accessible à l’adresse http://localhost:3000
```
