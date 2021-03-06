# App (projet) : gestionnaire de livres à lire

## Créer la table BDD et la connecter à l'app Ruby on Rails

PS : noms en minuscules et en anglais, espaces avec _
- **table** : books     # pluriel du nom de l'entrée
- **colonne** : title   # au singulier
- **entrées** : book    # au singulier (entrées = ce que l'on peut ajouter/supprimer)

## Générer une migration (fichier qui modifie la BDD : add/rm/modif table/column)
- Terminal : `rails generate migration TableBooks`
- Ouvrir et modifier le fichier créé : db/migrate/(dateheure)_table_books.rb
```ruby
class TableBooks < ActiveRecord::Migration
  def change
    # function : arguments
    create_table :books                   # créer la table books
    add_column :books, :title, :string    # add column : table name, column name, type
  end
end

# Types possibles :
# string : textes (< 255 caractères)
# text : textes (> 255 caractères)
# integer : nombres entiers
# float : nombres à virgule
# datetime : date et heure
```

## Donner vie à la BDD
- Terminal : `rake db:migrate` cherche les fichiers pas encore exécutés

## Lier classe à la table de la BDD
- Créer et modifier fichier : app/models/book.rb (nom table au singulier)
```ruby
class Book < ActiveRecord::Base
end
```
## Vérifier fonctionnement BDD
- Terminal :
```bash
rails console     # Accéder à la console rails irb pour accéder à toutes les classes de l'application
Book.new          # Créer nouvelle instance de la classe
# Renvoi :
# <Book id: nil, title: nil>
# => indique id et title, la connexion a été faite, tout fonctionne
# quitter la console rails
exit
```

## Ajouter/Modifier/Supprimer des lignes d'une BDD (données)
- Terminal : 
```bash
rails c   # = rails console
# AJOUTER UNE ENTRÉE
book = Book.new                 # Créer une instance de classe, rangée dans une variable
book.title = "Title du livre"   # Ajouter un titre à la variable
book.save                       # Sauvegarder l'entrée
Book.create title: "Bonjour"    # Idem (autre écriture) : crée l'entrée, le titre + sauvegarde
book                            # Visualiser l'entrée créée (id + title)
# VOIR LES ENTRÉES EXISTANTES POUR LES MODIFIER
Book.all                        # Lister toutes les entrées --> id = 1, title = "Title of the book"
Book.find(1)                    # Retourne-moi l'entrée avec l'id n°1
book = Book.find(1)             # Mettre l'entrée dans une variable pour la modifier
book.title = "Truc"             # Changement du titre
book.save                       # Enregistrer changements
# SUPPRIMER UNE ENTRÉE
book.destroy                    # Supprime l'entrée associée à la variable book
Book.find(1).destroy            # Autre écriture (pas besoin de variable)
Book.all                        # Liste les entrées : aucune entrée
```

## Lier les données de la BDD au site
- Terminal :
```bash
rails c
# ajouter des livres à la BDD
Book.create title: "Bonjour"
Book.create title: "Bonne aprem"
Book.create title: "Bonne soirée"
exit
# Générer un nouveau controler (= nouvelle page web) :
# nom de la table de la BDD (books) + page qui liste les données (index)
rails generate controller books index
rails s
```
- Modifer le code généré automatiquement dans les pages :
  - app/controllers/books_controller.rb
  ```ruby
  class BooksController < ApplicationController
    def index
      # ajouter cette ligne pour afficher tous les livres dans une variable
      @books = Book.all
    end
  end
  ```
  - app/views/books/index.html.erb
  ```rb
  <h1>Books#index</h1>
  <p>Find me in app/views/books/index.html.erb</p>
  # Ajouter ces variables pour accéder aux livres
  <p>Liste des livres</p>
  <% @books.each do |book| %>
    <p><%= book.title %></p>
  <% end %>
  <p><a href="/">Lien vers la 1ère page</a></p>
  <p><a href="/contact">Lien vers la 2e page</a></p>
  # Nouveau lien de la page (après modification du fichier config/routes.rb)
  <p><a href="/books">Lien vers les livres</a></p>
  ```
  - in config/routes.rb modify root :
  ```rb
  get 'books' => 'books#index'    # Accès http://localhost:3000/books
  ```
  
## Ajouter des données depuis un formulaire (sur le site)
### Créer un formulaire
- Formulaire en html pur :
```html
<form action="/books" method="post">
    <input type="text" name="title">
    <input type="submit" value="Ajouter à la liste">
</form> 
```
- Dans le fichier app/views/books/index.html.erb :
```rb
<%= form_tag "/books", method: "post" do %>
    <input type="text" name="title">
    <input type="submit" value="Ajouter à la liste">
<% end %>
```
- Add a root for submit post in config/routes.rb :
```rb
post 'books' => 'books#create'
```
- Create a function that redirect to books in app/controllers/books_controller.rb :
```rb
def create
  Book.create title: params[:title]
  redirect_to "/books"
end
```
