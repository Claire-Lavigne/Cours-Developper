# Ruby
- Exécuter code : console
- Écrire code : éditeur code

# [Installer Ruby (et Rails)](https://openclassrooms.com/en/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby/2915056-installez-vos-outils#/id/r-2992491)

# Bases
```ruby
# ouvrir un fichier rb depuis terminal
ruby nom_du_fichier.rb
# nommage variables
nom_variable = 20
# concaténation
bravo = "Bravo " + nom_variable + " !"
bravo = "Bravo #{nom_variable} !"
# tableaux
tableau = [ "Paris", "Toronto", "NYC", "Rio", "Sydney", "Hong-Kong", "Berlin" ]
# appliquer une méthode à une variable de type tableau
nom_du_tableau.nom_de_la_methode
# connaitre nombre d'éléments du tableau
tableau.size
# accéder à l'élément n°1
tableau[0]
# modifier élément
tableau[0] = "Albi"
# ajouter un élément
tableau << "Londres"
# hash table
table_de_hashage = { clé_1: valeur_1, clé_2: valeur_2, ... }
jours_voyage = { paris: 0, toronto: 7, nyc: 3 }
# accéder à une valeur par la clé
jours_voyage[:toronto]
# ajouter une clé+valeur
jours_voyage[:rio] = 5
```

# Boucles
```ruby
# boucle pour parcourir un tableau
jours_ouvres = ["lundi","mardi","mercredi","jeudi","vendredi"]

i=5

jours_ouvres.each do |jour|
  if jour == "vendredi" 
    puts jour + " : Bon weekend !"
  elsif jour == "lundi"
    puts jour + " : Bon courage !"
  else
    puts jour + " : Weekend dans #{i} jours !"
  end
  i-=1
end

# resultat
lundi : Bon courage ! 
mardi : Weekend dans 4 jours ! 
mercredi : Wekeend dans 3 jours !
jeudi : Weekend dans 2 jours !
vendredi : Bon weekend !

# boucle de répétition
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

# Conditions
```ruby
if trajet_minutes > 120
  puts "Prends un film avec toi"
elsif trajet_minutes < 5
  puts "Pas le temps de t'asseoir..."
else
  puts "Tu as le temps de lire au moins quelques chapitres d'un bouquin !"
end

# boolean
if code_indenté
  puts "Bravo, ton code est bien indenté !"
else
  puts "Pense à bien indenter ton code pour améliorer sa lisibilité !"
end

# < > <= >= == != && ||
```
