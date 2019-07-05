# Logique de programmation

## Variables = boîte de rangement
### Variable
valeur éphémère
### Constante
valeur invariable

## Tableaux = Ranger des données (similaires) dans un classeur
### Simple
```js
villes = ['Paris', 'New York', 'Berlin', 'Montréal']
```
### Complexe
```js
nom_du_tableau = {
  clé_1 : valeur_1, 
  clé_2 : valeur_2, 
  ... 
}
```
### Très complexe
```js
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montréal", duree: 15 }
]
```

## Boucle = Répéter une action
- Ex : Pour parcourir un tableau (each)

## POO (programmation orientée objet)
### Classes = Plan avec des objets
- New = instances de classes
```js
class Eleve
  attr_accessor :prenom, :langage_prefere
end

nom_de_l_objet = nom_de_la_classe.new
bob = Eleve.new
bob.prenom = "Bob"
bob.langage_prefere = "Ruby !!!"
```

### Méthodes / Fonctions = Actions (dans une classe) avec ou sans paramètre(s)
```js
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
```
