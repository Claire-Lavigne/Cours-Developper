# Classes
- 1 fichier par classe : MaClasse.php
- `<?php require 'MaClasse.php';`

Si j'ai plusieurs fichiers `MaClasse.php`, créer fichier `class.php` :
```php
<?php
function chargerClasse($classe) {
  // On inclut la classe correspondante au paramètre passé.
  require $classe . '.php'; 
}
// On enregistre la fonction en autoload
// pour qu'elle soit appelée dès qu'on instanciera une classe non déclarée.
spl_autoload_register('chargerClasse'); 

$perso = new MaClasse;
```

```php
<?php
// création d'une classe
class Personnage {

  // création d'attributs (variables)
  private $_force;        // La force du personnage
  private $_experience;   // Son expérience
  private $_degats;       // Ses dégâts
  // on peut initialiser la valeur des attributs
  private $_localisation = "Albi"; // Sa localisation par défaut est "Albi"
  
  // Déclarations de constantes en rapport avec la force.
  const FORCE_PETITE = 20;
  const FORCE_MOYENNE = 50;
  const FORCE_GRANDE = 80;
  
  // Création d'un constructeur demandant 2 paramètres
  // Optionnel --> Permet d'initialiser des attributs lors de la création de l'objet
  public function __construct($forceInitiale, $degats) {
    echo 'Voici le constructeur !'; // Message s'affichant une fois que tout objet est créé.
    $this->setForce($forceInitiale); // Initialisation de la force.
    $this->setDegats($degats); // Initialisation des dégâts.
    $this->_experience = 1; // Initialisation de l'expérience à 1.
  }
  
  // création de méthodes (fonctions)
  
  // Une méthode pour faire parler le personnage
  public function parler() { echo 'je suis un personnage'; }
  
  // Une méthode qui déplacera le personnage (modifiera sa localisation).
  public function deplacer() {}
  
  // Une méthode qui frappera un personnage (suivant la force qu'il a).
  public function frapper(Personnage $persoAFrapper) {
    $persoAFrapper->_degats += $this->_force;
  }
  
  // Une méthode qui ajoute 1 à notre attribut $_experience.
  public function gagnerExperience() {
    $this->_experience = $this->_experience + 1;
    // même syntaxe
    $this->_experience += 1
    $this->_experience++;
  }
  
  // Mutateur chargé de modifier l'attribut $_force.
  public function setForce($force) {
    // On vérifie qu'on nous donne une
    // « FORCE_PETITE », « FORCE_MOYENNE » ou « FORCE_GRANDE ».
    if (in_array($force, [self::FORCE_PETITE, self::FORCE_MOYENNE, self::FORCE_GRANDE])) {
      $this->_force = $force;
    }
  }
  
  // Mutateur chargé de modifier l'attribut $_experience.
  public function setExperience($experience) {
    // S'il ne s'agit pas d'un nombre entier.
    if (!is_int($experience))
    {
      trigger_error('L\'expérience d\'un personnage doit être un nombre entier', E_USER_WARNING);
      return;
    }
    // On vérifie bien qu'on ne souhaite pas assigner une valeur supérieure à 100.
    if ($experience > 100) 
    {
      trigger_error('L\'expérience d\'un personnage ne peut dépasser 100', E_USER_WARNING);
      return;
    }
    $this->_experience = $experience;
  }
  
  // Une méthode qui affiche l'attribut $_degats
  public function degats()
  {
    return $this->_degats;
  }
  
  // Une méthode qui affiche l'attribut $_force.
  public function force()
  {
    return $this->_force;
  }
        
  // Une méthode qui affiche l'attribut $_experience.
  public function experience()
  {
    return $this->_experience;
  }
}

// On crée deux personnages
$perso1 = new Personnage;
// On envoie une « FORCE_MOYENNE » en guise de force initiale.
$perso2 = new Personnage(Personnage::FORCE_MOYENNE);
// Avec constructeur :
$perso3 = new Personnage(60, 0); // 60 de force, 0 dégât, 1 d'expérience

// appel de la méthode pour faire parler le perso
$perso1->parler();

// On donne des valeurs de force et d'expérience à chaque perso
$perso1->setForce(10);
$perso1->setExperience(2);
$perso2->setForce(90);
$perso2->setExperience(58);

// Le personnage n°1 frappe le personnage n°2 qui prend des degats
$perso1->frapper($perso2);
// $perso1 gagne de l'expérience
$perso1->gagnerExperience();

echo 'Le personnage 1 a ', $perso1->force(), ' de force, contrairement au personnage 2 qui a ', $perso2->force(), ' de force.<br />';
echo 'Le personnage 1 a ', $perso1->experience(), ' d\'expérience, contrairement au personnage 2 qui a ', $perso2->experience(), ' d\'expérience.<br />';
echo 'Le personnage 1 a ', $perso1->degats(), ' de dégâts, contrairement au personnage 2 qui a ', $perso2->degats(), ' de dégâts.<br />';
```
