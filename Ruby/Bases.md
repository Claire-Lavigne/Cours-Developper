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
```
```bash
Paris
New York
Berlin
Montreal
```

```ruby
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
```
```bash
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

# Show all voyages
voyages.each do |voyage|
    puts "Voyage à #{voyage[:ville]} de #{voyage[:duree]} jours"
end

# Show short voyages
voyages.each do |voyage|
    if voyage[:duree] <= 5
        puts "Voyage à #{voyage[:ville]} de #{voyage[:duree]} jours"
    end
end
```
```bash
# Show all voyages
Voyage à Paris de 10 jours
Voyage à New York de 5 jours
Voyage à Berlin de 2 jours
Voyage à Montreal de 15 jours

# Show short voyages
Voyage à New York de 5 jours
Voyage à Berlin de 2 jours
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

## Class - Objets - POO
```ruby
# Classe d'un objet
class Utilisateur
    # Attributs de la classe
    attr_accessor :prenom, :nom, :pays

    # Méthode sans paramètres (= Fonction)
    def nom_complet
        prenom + " " + nom
    end

     # Méthode avec paramètres (= Fonction)
     def habite_en(valeur)
        # tester condition : si la valeur = pays alors vrai, sinon faux
        valeur == pays
    end
end

# Instance de classe (objet)
bob = Utilisateur.new
# Attributs de l'instance
bob.prenom = "Bob"
bob.nom = "Dylan"
bob.pays = "France"

puts bob.nom_complet
puts "Est-ce que Bob habite en France ?"
puts bob.habite_en("France") #true

if bob.habite_en("France")
    puts "Bienvenue"
else
    puts "Error"
end

jane = Utilisateur.new
jane.prenom = "Jane"
jane.nom = "James"
jane.pays = "Angleterre"

puts jane.nom_complet
```
```bash
Bob Dylan
Est-ce que Bob habite en France ?
true
Bienvenue
Jane James
```

# Class2
```ruby
# Classe d'un objet
class Utilisateur
    # Attributs de la classe
    attr_accessor :prenom, :amis

    # Méthode sans paramètres (= Fonction)
    def est_ami_avec?(prenom)
        amis.each do |ami|
            return true if ami.prenom == prenom
        end
        return false
    end
end

# Instance de classe (objet)
bob = Utilisateur.new
jane = Utilisateur.new
pierre = Utilisateur.new
# Attributs de l'instance
bob.prenom = "Bob"
jane.prenom = "Jane"
pierre.prenom = "Pierre"

bob.amis = [jane, pierre]
jane.amis = [bob]
pierre.amis = [jane, bob]

puts "Bob est ami avec Jane ? #{bob.est_ami_avec?("Jane")}"
puts "Jane est amie avec Pierre? #{jane.est_ami_avec?("Pierre")}"
```
```bash
Bob est ami avec Jane ? true
Jane est amie avec Pierre? false
```

# Class 
```ruby
# Classe d'un objet
class Utilisateur
    # Attributs de la classe
    attr_accessor :prenom

    #Réduire code avec méthode initialize
    def initialize(prenom, sexe)
        @prenom = prenom
        if sexe == "f"
            @prenom = "Madame " + prenom
        else
            @prenom = "Monsieur " + prenom
        end
    end
end

# Instance de classe (objet)
bob = Utilisateur.new("Bob", "h")
jane = Utilisateur.new("Jane", "f")

puts bob.prenom
```
```bash
Monsieur Bob
```
