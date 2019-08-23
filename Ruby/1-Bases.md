## [Installer Ruby](https://openclassrooms.com/en/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby/2915056-installez-vos-outils#/id/r-2992491) [et Rails](https://openclassrooms.com/en/courses/3149156-initiez-vous-a-ruby-on-rails/3149171-installez-ruby-on-rails#/id/r-3324757) dans Terminal
```bash
# Voir la liste des outils de développement installés - Mettre à jour (installer homebrew si besoin)
brew list
brew update
# Installer (si nécessaires) rbenv - gestionnaire versions Ruby - Node.js - Yarn + Vérifier versions
brew install rbenv ruby-build node yarn
rbenv -v
node -v
# Installer Ruby [voir dernière version stable](https://www.ruby-lang.org/en/downloads/) / Vérifier version
rbenv install 2.6.3
rbenv global 2.6.3
ruby -v
# Installer Rails [voir dernière version stable](https://rubygems.org/gems/rails/versions) / Mettre à jour / Vérifier version
sudo gem install rails
sudo gem update
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
# If older version needed : https://stackoverflow.com/questions/12092928/how-to-bundle-install-when-your-gemfile-requires-an-older-version-of-bundler
```
