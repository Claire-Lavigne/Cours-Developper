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
