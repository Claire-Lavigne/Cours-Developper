## Table + loop
```ruby
villes = [ "Paris", "Toronto", "NYC", "Rio", "Sydney", "Hong-Kong", "Berlin" ]

# appliquer une méthode à une variable de type tableau
nom_du_tableau.nom_de_la_methode

# connaitre nombre d'éléments du tableau
villes.size

# accéder à l'élément n°1
villes[0]

# modifier un élément
villes[0] = "Albi"

# ajouter un élément
villes << "Londres"

villes.each do |ville|
  puts ville
end

# Paris
# New York
# Berlin
# Montreal
```

## Table + loop avec compteur
```ruby
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

# lundi : Bon courage ! 
# mardi : Weekend dans 4 jours ! 
# mercredi : Wekeend dans 3 jours !
# jeudi : Weekend dans 2 jours !
# vendredi : Bon weekend !
```

## Hash table {clé_1: valeur_1, ...) + loop
```ruby
sejours = { paris: 0, toronto: 7, nyc: 3 }

# accéder à une valeur par la clé
sejours[:toronto]

# ajouter une clé+valeur
sejours[:rio] = 5

sejours.each do |sejour|
  puts sejour
end

# paris
# 0
# toronto
# 7
# nyc
# 3
```

## Hash tables inside table + loop
```ruby
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montreal", duree: 15 }
]

# Show all voyages
voyages.each do |voyage|
    puts "Voyage à #{voyage[:ville]} de #{voyage[:duree]} jours"
end

# Voyage à Paris de 10 jours
# Voyage à New York de 5 jours
# Voyage à Berlin de 2 jours
# Voyage à Montreal de 15 jours

# Show only short voyages
voyages.each do |voyage|
    if voyage[:duree] <= 5
        puts "Voyage à #{voyage[:ville]} de #{voyage[:duree]} jours"
    end
end

# Voyage à New York de 5 jours
# Voyage à Berlin de 2 jours
```

## Boucles : répétition
```ruby
3.times do 
  puts "tourner sa langue"
end
puts "... et parler !"

#resultat
tourner sa langue
tourner sa langue
tourner sa langue
... et parler !
```
