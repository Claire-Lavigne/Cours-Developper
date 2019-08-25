# Bases Rails
## Terminal : Créer et lancer un site accessible sur [localhost:3000](http://localhost:3000)
```bash
# Initialiser un nouveau site (dossier)
rails new nomDuDossier
cd nomDuDossier

# Visualiser le site
rails server    # ou rails s

# Résultat (+/-) affiché :
# => Booting WEBrick
# => Rails 4.2.10 application starting in development on http://localhost:3000
# => Run `rails server -h` for more startup options
# => Ctrl-C to shutdown server
```
## Ouvrir le dossier ds vscode.
## Terminal : Créer la page d'accueil
```bash
# créer automatiquement une homepage 
rails g controller pages home

# page disponible sur http://localhost:3000/pages/home
# chemin ds dossier indiqué : Find me in app/views/pages/home.html.erb
```
## Changer l'url d'une page + Ajouter une route pour une nouvelle page
Modfier fichier config/routes.rb
```ruby
Rails.application.routes.draw do

  # Chemin d'accès d'origine :
  get 'pages/home'                      # Accès par http://localhost:3000/pages/home
  # Possibilité de modifier par :
  get 'nomDuDossier' => 'pages#home'    # Accès par http://localhost:3000/nomDuDossier
  # get (route) => (contrôleur) # (fonction)
  root 'pages#home'                     # Accès par http://localhost:3000/
  
  # Nouveau chemin d'accès (nouvelle page)
  get 'contact' => 'pages#contact'      # Accès par http://localhost:3000/contact
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
```

## Ajouter une nouvelle page ( = nouvelle fonction)
- Modifier app/controllers/pages_controller.rb

```ruby
class PagesController < ApplicationController
  # fonction 'home' pour la root 'pages#home' 
  def home
    # Créer une variable utilisable dans page home.html
    @claire = 23
  end

  # fonction 'contact' pour la root 'pages#contact' 
  def contact
  end
end
```

## Ajouter du contenu à la page créée + liens vers autres pages
- Créer fichier dans app/views/nom_du_contrôleur/nom_de_la_fonction.html.erb
```html
<h1>Contact</h1>
<p>Voici mon premier site réalisé avec Ruby on Rails</p>
<p><a href="/">Lien vers la 1ère page</a></p>
<p><a href="/contact">Lien vers la 2e page</a></p>
```

## Trouver
- app/views/layouts/application.html.erb : meta tags, css, js (head) + <%= yield %> (toutes les pages créées dans view)
- app/assets/stylesheets/ : fichiers css, scss
- app/assets/javascripts : fichiers js
