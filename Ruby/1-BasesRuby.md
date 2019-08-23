## Bases Ruby
- Écrire code --> éditeur code : create ```nom_du_fichier.rb```, write ```puts "hello"```
- Exécuter code --> console : write ```ruby nom_du_fichier.rb```, shows ```hello```

```ruby
# commentaire

# afficher dans la console
puts "hello"

# nommage variables
nom_variable = 20

# concaténation
bravo = "Bravo " + nom_variable + " !"
bravo = "Bravo #{nom_variable} !"

# Conditions
< > <= >= == != && ||
if elsif else

# Tables
villes = [ "Paris", "Toronto", "NYC", "Rio", "Sydney", "Hong-Kong", "Berlin" ]

# Tables de hashage
voyages = { paris: 0, toronto: 7, nyc: 3 }

# Hash tables inside table
voyages = [
    { ville: "Paris", duree: 10 },
    { ville: "New York", duree: 5 },
    { ville: "Berlin", duree: 2 },
    { ville: "Montreal", duree: 15 }
]

# Boucle - Loop : Parcourir toutes les valeurs d'une table
villes.each do |ville|
  puts ville
end

# Boucle à répétition
3.times do 
  puts "tourner sa langue"
end
```
