:warning: Éviter code Ruby dans fichiers HTML !

Comment ?
- Mettre le code Ruby dans les fichiers Ruby
  - Créer des fonctions
  - Mettre le résultat à afficher dans une ```@variable```
  - :exclamation: Seules les variables commençant par ```@``` sont accessibles depuis "views"

- Importer les variables en html ```<%= @variable %>```
  - :information_source: ```<%  %>``` permet d'insérer du code ruby
  - :information_source: ```=``` remplace ```puts```

## Exemple
### Créer une variable (utilisable dans page home.html)
Modifier fichier app/controllers/pages_controller.rb
```rb
class PagesController < ApplicationController
  def home
    @variable = 5
  end
end
```
### Ajouter la variable (créée dans la page home controllers)
Modifier fichier app/views/pages/home.html.erb
```html
<h1>Bienvenue !</h1>
<p>Ceci est ma première variable : <%= @variable %>.</p>
```

## Condition
```rb
<h1>Bienvenue !</h1>
<p>Ceci est ma première variable : <%= @variable %>.</p>

<% if @variable == 42 %>
  Super, la variable vaut 42 !
<% else %>
  Mince, la variable ne vaut pas 42 !
<% end %>

# Means :
# if variable == 42
#  puts Super, la variable vaut 42 !
# else
#  puts Mince, la variable ne vaut pas 42 !
# end
```

## Boucle
```rb
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
