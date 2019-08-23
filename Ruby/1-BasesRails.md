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
Ouvrir nouveau dossier dans vscode. Ouvrir terminal :
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
```rb
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
:warning: Éviter code Ruby dans fichiers HTML ! Comment ? Mettre le code Ruby dans les fichiers Ruby.
Créer des fonctions, mettre le résultat à afficher dans une @variable. Importer uniquement la variable en html

## Changer url d'une page : config/routes.rb
```ruby
Rails.application.routes.draw do
  get 'pages/home' # Chemin d'accès d'origine --> Accès par localhost:3000/pages/home
  # Possibilité de modifier par :
      # get 'castor' => 'pages#home'    # --> Accès par localhost:3000/castor
      # root 'pages#home'               # --> Accès par localhost:3000/
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
```

## Ajouter une nouvelle page
- nouvelle fonction dans app/controllers/pages_controller.rb ;
- fichier HTML rangé dans app/views/nom_du_contrôleur/nom_de_la_fonction.html.erb ;
- nouvelle une route dans config/routes.rb.

## Trouver
- app/views/layouts/application.html.erb : meta tags, css, js (head) + <%= yield %> (toutes les pages créées dans view)
- app/assets/stylesheets/ : fichiers css, scss
- app/assets/javascripts : fichiers js
