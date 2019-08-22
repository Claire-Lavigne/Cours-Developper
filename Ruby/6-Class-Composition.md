Les compositions de classes permettent de lier 2 classes différentes

# 2 classes différentes à lier
```ruby
class Eleve
    attr_accessor :nom

    def initialize(nom)
        @nom = nom
    end
end
  
class Examen
    attr_accessor :matiere, :note
    
    def initialize(matiere,note)
      @matiere = matiere
      @note = note
    end
  end

eleve = Eleve.new("Billy")
maths = Examen.new("maths", 10)
philo = Examen.new("philo", 15)
```

# 2 classes différentes liées
```ruby
class Eleve
    # j'ajoute un attribut qui va servir de lien et je l'initialise
    attr_accessor :nom, :examens

    def initialize(nom, examens)
        @nom = nom
        @examens = examens
    end

    # j'ajoute une méthode de calcul de la moyenne
    # moyenne = total des notes / nb de notes
    def moyenne
        total = 0
        examens.each do |examen|
            total = total + examen.note
        end
        total / examens.size
    end
end
  
class Examen
    attr_accessor :matiere, :note
    
    def initialize(matiere,note)
      @matiere = matiere
      @note = note
    end
  end


# je lie la classe Eleve aux objets de l'autre classe (cf : array)
eleve = Eleve.new("Billy", [maths, philo])
# means :
# eleve = Eleve.new("Billy")
# eleve.examens = [maths, philo]

# utiliser floats pour afficher la juste moyenne
maths = Examen.new("maths", 10.0)
philo = Examen.new("philo", 15.0)

puts "Examens de #{eleve.nom}"  # Examens de Billy

# je loop l'array de ma classe
eleve.examens.each do |examen|
    puts examen.matiere         # maths philo
end

# voir la moyenne de l'élève
puts eleve.moyenne              # 12.5
```
