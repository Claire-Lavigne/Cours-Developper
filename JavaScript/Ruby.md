## Variable
### Variable
boîte de rangement pour une valeur éphémère
### Constante
boîte de rangement pour une valeur invariable

## Tableaux
### Simple
Ranger des données similaires dans une chemise
```ruby
villes = ['Paris', 'New York', 'Berlin', 'Montréal']
```
### Complexe
Ranger des chemises dans un classeur
```ruby
nom_du_tableau = {
  clé_1 : valeur_1, 
  clé_2 : valeur_2, 
  ... 
}
```
### très complexe
```ruby
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montréal", duree: 15 }
]
```

## Boucle
- Effectuer des actions répétitives
- Répéter une action pour parcourir un tableau (each)

## POO (programmation orientée objet)
### Classes
plans pour créer des objets spécifiques (new = instances de classes)
```ruby
class Eleve
  attr_accessor :prenom, :langage_prefere
end

nom_de_l_objet = nom_de_la_classe.new
bob = Eleve.new
bob.prenom = "Bob"
bob.langage_prefere = "Ruby !!!"
```

### Méthodes / Fonctions
Série d'actions (à l'intérieur d'une classe) avec ou sans paramètre(s)
```ruby
class Eleve
  attr_accessor :prenom, :nom, :langage_prefere
  
  #méthode sans paramètre
  def nom_complet 
    prenom + " " + nom
  end
  
  #méthode avec paramètre
  def aime_le(langage)
    if langage == langage_prefere
      "Oui :)"
    else
      "Non :("
    end
  end

end

jc = Eleve.new
jc.prenom = "John"
jc.nom = "Cleese"
jc.langage_prefere = "Python"

puts "Est-ce que " + jc.nom_complet + " aime le Ruby ?\n" + jc.aime_le("Ruby")

# Est-ce que John Cleese aime le Ruby ?
# Non :(
