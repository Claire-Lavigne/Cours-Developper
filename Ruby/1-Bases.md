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
Ouvrir castor dans vscode, avec terminal
```bash
# créer automatiquement une homepage 
rails g controller pages home
# page disponible sur http://localhost:3000/pages/home
# chemin ds dossier indiqué : Find me in app/views/pages/home.html.erb
```
ouvrir fichier app/views/pages/home.html.erb et modifier contenu
```html
<h1>Bienvenue !</h1>
<p>Ceci est ma première variable : <%= @variable %>.</p>
<!-- ajout d'une variable créée dans la page home controllers) -->
<!-- <%  %> permet d'insérer du code ruby -->
<!-- = remplace puts -->
    
```
ouvrir fichier app/controllers/pages_controller.rb et ajouter une variable
```rb
class PagesController < ApplicationController
  def home
    # Créer une variable utilisable dans page home.html
    @variable = 5
    # Seules les variables commençant par @ sont accessibles depuis "views"
  end
end
```

## Condition
```
<h1>Bienvenue !</h1>
<p>Ceci est ma première variable : <%= @variable %>.</p>

<% if @variable == 42 %>
  Super, la variable vaut 42 !
<% else %>
  Mince, la variable ne vaut pas 42 !
<% end %>

# Means :
# if varibale == 42
#  puts Super, la variable vaut 42 !
# else
#  puts Mince, la variable ne vaut pas 42 !
# end
```

## Boucle
```
<h1>Bienvenue !</h1>
<p>Ceci est ma première variable : <%= @variable %>.</p>

<% @variable.times do |i| %>
  <%= i %>
<% end %>

# Means :
# 5.times do |i|
#  puts i
# end
```
