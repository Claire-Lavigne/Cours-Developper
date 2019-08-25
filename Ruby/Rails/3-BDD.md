App (projet) : gestionnaire de livres à lire

# Créer la table BDD et la connecter à l'app Ruby on Rails

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
- Terminal : `rails console` (ou `rails c`)
