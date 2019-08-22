
# POO

## Classe avec des objets
```ruby
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

# Instances de classe (objets)
bob = Utilisateur.new
jane = Utilisateur.new

# Attributs de l'instance de classe
bob.prenom = "Bob"
bob.nom = "Dylan"
bob.pays = "France"

jane.prenom = "Jane"
jane.nom = "James"
jane.pays = "Angleterre"

# Affichage d'une méthode sans paramètres
puts bob.nom_complet                        # Bob Dylan
puts jane.nom_complet                       # Jane James

# Affichage d'une autre méthode avec paramètres
puts "Est-ce que Bob habite en France ?"    # Est-ce que Bob habite en France ?
puts bob.habite_en("France")                # true

if bob.habite_en("France")                  # Bienvenue
    puts "Bienvenue"
else
    puts "Error"
end
```

# Class avec 2 objets qui intéragissent entre eux
```ruby
class Utilisateur
    attr_accessor :prenom, :amis

    def est_ami_avec?(prenom)
        amis.each do |ami|
            return true if ami.prenom == prenom
        end
        return false
    end
end

bob = Utilisateur.new
jane = Utilisateur.new
pierre = Utilisateur.new

bob.prenom = "Bob"
jane.prenom = "Jane"
pierre.prenom = "Pierre"

bob.amis = [jane, pierre]
jane.amis = [bob]
pierre.amis = [jane, bob]

# Est-ce qu'un utilisateur est ami avec l'autre ?
puts "Bob est ami avec Jane ? #{bob.est_ami_avec?("Jane")}"
puts "Jane est amie avec Pierre? #{jane.est_ami_avec?("Pierre")}"

# Bob est ami avec Jane ? true
# Jane est amie avec Pierre? false
```

# Class avec code réduit grâce à la méthode initialize
```ruby
class Utilisateur
    attr_accessor :prenom

    def initialize(prenom, sexe)
        @prenom = prenom
        if sexe == "f"
            @prenom = "Madame " + prenom
        else
            @prenom = "Monsieur " + prenom
        end
    end
end

# On peut déjà initialiser les attributs à la création de l'objet
bob = Utilisateur.new("Bob", "h")
jane = Utilisateur.new("Jane", "f")

puts bob.prenom   # Monsieur Bob
```
