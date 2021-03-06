# POO
- Fichier MyClass.php (1 class = 1 fichier => meme nom)
- Scope / Visibilité
  - public : accès aux propriétés et méthodes de l'objet (càd la classe) depuis l'extérieur
  - protected : accès aux propriétés et méthodes de l'objet dans l'objet et ses héritiers
  - private : accès aux propriétés et méthodes de l'objet dans l'objet uniquement
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

# Extends
- Les classes Enfant héritent les propriétés et méthodes d'une (seule et unique) classe Parent.
- `__CLASS__` : nom de la classe actuelle
- `parent` : appeler une méthode de la classe parente

```php
class Parent {
  protected $attribut = "attribut";
  const MYCONST = "constante parent"
  public function __construct() {
    echo "constructeur" . __CLASS__;
  }
  public function getAttribut() {
    return $this->attribut;
  }
}

class Enfant extends Parent {
  public function childMethod() {
    echo "methode" . __CLASS__ . "<br>";
  }
  public function __construct() {
    parent::__construct();  // appel du constructeur classe Parent
    echo "constructeur " . __CLASS__;
  }
  public function parentConstant() {
    echo parent::MYCONST;
  }
}

$objet = new Enfant;        // constructeur : classe Parent
echo $objet->getAttribut(); // attribut Parent
echo $objet->childMethod(); // methode : classe Enfant
$objet->parentConstant()    // constante du parent
```

# Final
- Les classes, méthodes et propriétés `final` ne peuvent être héritées
```php
final class MyClass {
  //
}

class ChildClass extends MyClass {
  // fatal error
}

class Parent {
  public final function method() {
  }
}
```

# Polymorphisme
- Quand la classe fille redéfinie le contenu des méthodes et propriétés héritées

# Abstract
- Classe abstraite : ne peut être instanciée (ses enfants peuvent l'être)
- Méthode abstraite : méthode obligatoire pour les classes enfants
```php
abstract class Restauration {
  abstract protected function servir($jour);  // paramètre obligatoire
}

class Restaurant extends Restauration {
  public function servir($jour, $menu) {
  }
}

new Restauration;  // error
new Restaurant;    // ok
```

# Interface
- `interface Classe` : quand toutes les méthodes d'une classe sont abstraites
```php
// Declarer l'interface "iTemplate"
interface iTemplate {
  public function setVariable($name, $var);
  public function getHTML($template);
}

// Implémenter l'interface
class Template implements iTemplate {
  private $vars = [];

  public function setVariable($name, $var) {
    $this->vars[$name] = $var;
  }

  public function getHTML($template) {
    foreach ($this->vars as $name => $value) {
      $template = str_replace('{' . $name . '}', $value, $template);
  }
    return $template;
  }
}
```

# Namespaces
```php
namespace A\B;

class MaClasse
{
  public function hello()
  {
    echo 'Hello world !';
  }
}

// importation
require 'fichier.php';
use A\B\C\D\E\F as F;

  // or

use A\B\C\D\E\F\MaClasse as Hello;
$a = new Hello; // => $a = new A\B\C\D\E\F\MaClasse.
$a->hello();
    
```
