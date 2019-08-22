L'héritage permet de lier des classes (ayant de forts points communs) à une classe-mère

# 1 classe avec 2 objets identiques
```ruby
class Animal
    attr_accessor :nom

    def initialize(nom)
        @nom = nom
    end

    def parler
        puts "Je m'appelle #{nom}"
    end
end

chien = Animal.new("Marco le chien")
chat = Animal.new("Polo le chat")

chien.parler # Je m'appelle Marco le chien
chat.parler  # Je m'appelle Polo le chat
```

# 2 classes similaires avec 1 objet (identique aux 2 classes)
```ruby
class Chat
    attr_accessor :nom

    def initialize(nom)
        @nom = nom
    end

    def parler
        puts "#{nom}: Miaou!"
    end
end

class Chien
    attr_accessor :nom

    def initialize(nom)
        @nom = nom
    end

    def parler
        puts "#{nom}: Wuaf !"
    end
end

chien = Chien.new("Marco le chien")
chat = Chat.new("Polo le chat")     

chien.parler # Marco le chien: Wuaf !
chat.parler  # Polo le chat: Miaou!
```

# 3 classes héritent d'une classe-mère
```ruby
class Animal
    attr_accessor :nom
    
    def initialize(nom)
        @nom = nom
    end
end

# class nom_de_la_classe < nom_de_la_classe_mere
class Chat < Animal
    def parler
        puts "#{nom}: Miaou!"
    end
end

class Chien < Animal
    def parler
        puts "#{nom}: Wuaf !"
    end
end

class Oiseau < Animal
    def parler
        puts "#{nom}: Cui !"
    end
end

chien = Chien.new("Marco le chien")
chat = Chat.new("Polo le chat")
oiseau = Oiseau.new("Pif l'oiseau")

chien.parler  # Marco le chien: Wuaf !
chat.parler   # Polo le chat: Miaou!
oiseau.parler # Pif l'oiseau: Cui !
```
