- [Installer Ruby (et Rails)](https://openclassrooms.com/en/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby/2915056-installez-vos-outils#/id/r-2992491)
- Écrire code --> éditeur code : create ```nom_du_fichier.rb```, write ```puts "hello"```
- Exécuter code --> console : write ```ruby nom_du_fichier.rb```, shows ```hello```

## Bases
```ruby
# commentaire
# afficher dans la console
puts "hello"
# nommage variables
nom_variable = 20
# concaténation
bravo = "Bravo " + nom_variable + " !"
bravo = "Bravo #{nom_variable} !"
```

## Tableaux
```ruby
villes = [ "Paris", "Toronto", "NYC", "Rio", "Sydney", "Hong-Kong", "Berlin" ]
# appliquer une méthode à une variable de type tableau
nom_du_tableau.nom_de_la_methode
# connaitre nombre d'éléments du tableau
villes.size
# accéder à l'élément n°1
villes[0]
# modifier élément
villes[0] = "Albi"
# ajouter un élément
villes << "Londres"

## Hash table
table_de_hashage = { clé_1: valeur_1, clé_2: valeur_2, ... }
voyages = { paris: 0, toronto: 7, nyc: 3 }
# accéder à une valeur par la clé
voyages[:toronto]
# ajouter une clé+valeur
voyages[:rio] = 5

# boucle : parcourir tableau (normal + de hashage) pour afficher toutes les valeurs
villes.each do |ville|
  puts ville
end

# Autre exemple
jours_ouvres = ["lundi","mardi","mercredi","jeudi","vendredi"]

i=jours_ouvres.size

jours_ouvres.each do |jour|
  if jour == "lundi"
    puts jour + " : Bon courage !"
  elsif jour == "vendredi" 
    puts jour + " : Bon weekend !"
  else
    puts jour + " : Weekend dans #{i} jours !"
    i-=1
  end
end

# resultat
lundi : Bon courage ! 
mardi : Weekend dans 4 jours ! 
mercredi : Wekeend dans 3 jours !
jeudi : Weekend dans 2 jours !
vendredi : Bon weekend !
```

## Hash table
```ruby
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montreal", duree: 15 }
]

voyages.each do |voyage|
    puts "Voyage à #{voyage[:ville]} de #{voyage[:duree]} jours"
end
```

## Boucles : répétition
```ruby
7.times do 
  puts "tourner sa langue"
end
puts "... et parler !"

#resultat
tourner sa langue
tourner sa langue
tourner sa langue
tourner sa langue
tourner sa langue
tourner sa langue
tourner sa langue
... et parler !
```

## Conditions : comparaison
```ruby
if trajet_minutes > 120
  puts "Prends un film avec toi"
elsif trajet_minutes < 5
  puts "Pas le temps de t'asseoir..."
else
  puts "Tu as le temps de lire au moins quelques chapitres d'un bouquin !"
end

# < > <= >= == != && ||
```

## Conditions : boolean
```ruby
if code_indenté
  puts "Bravo, ton code est bien indenté !"
else
  puts "Pense à bien indenter ton code pour améliorer sa lisibilité !"
end
```
