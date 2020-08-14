# Fichier MyClass.php (1 class = 1 fichier => meme nom)
```php
class MyClass {
  // Propriété / Attribut / Donnée
  private $property;
  public $name = "John";          // à éviter
  private $secret = '123';
  
  // Méthode / Action / Code
  public function myMethod() {
    echo "Hello" . $this->name;   // this = l'objet
  }
  
  // getter
  public function getSecret() {
    return $this->secret;
  }
  
  // setter
  public function setSecret($newSecret) {
    if(is_inst($newSecret)) {
      $this->secret = $newSecret;
    }
  }
  
  // méthode magique = natif/automatisé (pas recommandé)
  public function __get($propriete) {
    if("age" == $propriete) {
      return $this->age;
    } elseif ("secretNumber" == $propriete) {
      echo "propriete privee";
    } else {
      echo "propriety inexistante";
    }
  }
  
  // méthode magique (pas recommandé)
  public function __set($propriete, $valeur) {
    if("age" == $propriete && is_int($valeur)) {
      $this->age = $valeur;
    } elseif ("secretNumber" == $propriete) {
      echo "propriety ou valeur privee";
    } else {
      echo "propriety ou valeur invalide";
    }
  }
}

// l'instance (objet de classe) appelle le constructor
$instance = new MyClass();

echo $instance->name;             // John Doe
$instance->name = "Michael";
echo $instance->name;             // Michael

$anonymous->myMethod();
```

# Constructeur et destructeur
Méthodes magiques appelées à l'instanciation/destruction de l'objet
```php
class MyConstructor {
  private $config;
  
  public function __construct($config) {
    $this->config = $config;
  }
  
  public function getConfig($name) {
    if(isset($this->config[$name])) {
      return $this->config[$name];
    }
  }
  
  public function __destruct() {
    // ...
  }
  
}
```

# Méthodes et propriétés "statiques" (ou "de classe")
- pas recommandé
- `::` : précède les propriétés et méthodes statiques
- `self` : classe en cours
```php
class Person {
  private $age;
  
  private static $majority;
  
  const DEFAULT_NAME = "Mickael";
  
  public static function getMajority() {
    return self::$majority;
  }
  
  public static function setMajority($nb) {
    if(is_int($nb))
      self::$majority = $nb;
  }
}

echo "le nom est " . Person::DEFAULT_NAME;

Person::setMajority(18);

echo "La majorité est à " . Person::getMajority();
```
