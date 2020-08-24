# PHP, pour quoi ?
- Envoyer données au serveur (refresh + code caché)

# Concurrents
- ASP .NET (C#)
- Ruby on Rails (Ruby)
- Django (Python)
- JEE ou "Java EE" (Java et JSP ou "Java Server Pages")

# [Manuel PHP](https://www.php.net/manual/fr/index.php)

# Show errors
- fichier `info.php`
```php
<?php
phpinfo();
```
- open file in browser
- line "Loaded Configuration File" => chemin d'accès d'un fichier => open this file
- search "error_reporting" => il faut qu'il soit écrit "error_reporting = E_ALL"
- search "display_errors" => il faut qu'il soit écrit "display_errors = On"
- enregistrer fichier
- relancer serveur Apache (ou autre)

## Errors
- **Parse error** : instruction PHP mal formée
- **Undefined function** : fonction inconnue (inexistante ou non reconnue)
- **Wrong parameter count** : fonction mal utilisée (trop ou pas assez de paramètres)
- **Maximum execution time exceeded** : boucle infinie

# Syntaxe
```php
<?php
// comment
/* comments */
?>
```

## Variables
- **Types** : string, int, float, bool, NULL (no datas)
- **Operators** : `+ - * / % ( )`
```php
$age_visitor = 25;        // set
$age_visitor = 26.5;      // modify
echo $age_visitor;        // show value

echo "L'individu a $age_visitor ans <br>";        // easier
echo 'L\'indiv a ' .$age_visitor. 'ans <br>';     // more used

// great for arrays : show variable type + content
echo '<pre>';
print_r($age);
echo '</pre>';

var_dump()
```

## If / Elseif / Else
- **Comparisons** : `== != < <= > >= && ||`


## Arrays
### Simple
```php
$names = ['François', 'Michel', 'Nicole', 'Véronique', 'Benoît'];
$names[0];
```
### Associative : key (string/int) --> value
```php
$date = [
  "year" 	=> 2017,
  "month" 	=> 'January',
  1 		=> 'start'
];

$date["year"];
```

## Parcourir un tableau associatif
```php
// Boucle "for" :
for ($numero = 0; $numero < 5; $numero++) {
    echo $prenoms[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}

// Boucle "foreach" (pour récupérer uniquement la valeur de l'élément) :
foreach($prenoms as $element) {
    echo $element . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}

// Boucle "foreach" (pour récupérer la valeur ET la clé de l'élément) :
foreach($prenoms as $cle => $element) {
    echo '[' . $cle . '] vaut ' . $element . '<br />'; // affiche [prenoms] vaut François, [prenoms] vaut Michel, etc...
}

// Savoir ce que contient un array sans utiliser de boucle
echo '<pre>';
print_r($prenoms);
echo '</pre>';

// array_key_exists : pour vérifier si une clé existe dans l'array ;
if (array_key_exists('nom', $prenoms))
// in_array : pour vérifier si une valeur existe dans l'array ;
if (in_array('Paul', $prenoms))
// array_search : pour récupérer la clé d'une valeur dans l'array.
$position = array_search('Jack', $prenoms);
echo $position; // 3
```


# Statements
**if**
```php
<?php
$variable = 23;
if ($variable == 23) {
  echo '<strong>Bravo !</strong> Trouvé !';
}
?>
```
ou
```php
<?php
$variable = 23;
if ($variable == 23) {
?>
  <strong>Bravo !</strong> Trouvé !
<?php
}
?>
```

**IF ELSE**
```php
$age = 8;
if ($age <=12) {
  echo "Salut gamin !";
  $authorisation_entrer = "oui";
} else {
  echo "Trop vieux"
  $authorisation_entrer = "non";
}
echo "Pouvez-vous entrer ? $authorisation_entrer";
```
Cas spécial booleans
```php
$age = 24;
if ($age >= 18) {
	$majeur = true;
} else {
	$majeur = false;
}

// short syntaxe
$majeur = ($age >= 18) ? true : false;
```

**IF ELSEIF ELSE**
```php
$authorisation_enter = "oui";               // is true
if ($authorisation_enter == "oui") {        // if true
// short syntaxe to verify if true
// if ($authorisation_enter)
  echo "Salut gamin !";
} elseif ($authorisation_enter == "non" {  // is false
// short syntaxe to verity if false
// elseif (!$authorisation_enter)
  echo "Trop vieux"
} else {
  echo "C'est quoi ton âge ?"
}
```

**Switch**
```php
$note = 10;
switch ($note) { // valeur à modifier (uniquement avec ==)
  case 9: // dans le cas où $note vaut 9
      echo "Tu es mauvais";
  break;
  case 16:
      echo "Tu te débrouilles très bien !";
  break;
  case 20:
      echo "Excellent travail, c'est parfait !";
  break;
  default:
      echo "Erreur";
}
```

# Boucle
**While**
```php
$age = 1;
while ($age <= 100) {
  echo 'Liste des âges : ' .$age. '<br/>';
  $age++;
}
```
**for**
```php
for ($age = 1; $age <= 100; $age++; {
  echo 'Liste des âges : ' .$age. '<br/>';
}
```

# Fonctions
**Existante**
-[Liste des fonctions PHP par catégorie](https://www.php.net/manual/fr/funcref.php)
```php
calculCube(4); // fonction qui ne retourne pas de valeur
$volume = calculCube(4); // fonction qui retourne une valeur (= placée dans une variable)
```
**Inexistante**
```php
fonctionImaginaire(17, 'Vert', true, 41.7);
```
**Exemple : fonction pour afficher la date et l'heure**
```php
<?php
// Enregistrer les fonctions dans des variables
$jour = date('d');
$mois = date('m');
$annee = date('Y');
$heure = date('H');
$minute = date('i');

// Afficher l'ensemble
echo 'Bonjour ! Nous sommes le ' . $jour . '/' . $mois . '/' . $annee . 'et il est ' . $heure. ' h ' . $minute;
?>
```

**Exemple : fonction pour dire bonjour aux visiteurs**
```php
<?php
function DireBonjour($nom) {
   echo 'Bonjour ' . $nom . ' !<br />';
}

DireBonjour('Marie');
DireBonjour('Patrice');
DireBonjour('Edouard');
DireBonjour('Pascale');
DireBonjour('François');
DireBonjour('Benoît');
DireBonjour('Père Noël');
?>
```

**Exemple : calculer le volume d'un cône**
```php
<?php
// Fonction qui calcule le volume du cône
function VolumeCone($rayon, $hauteur)
{
   $volume = $rayon * $rayon * 3.14 * $hauteur * (1/3); // calcul du volume
   return $volume; // indique la valeur à renvoyer
}

$volume = VolumeCone(3, 1);
echo 'Le volume d\'un cône de rayon 3 et de hauteur 1 est de ' . $volume;
?>
```

# Intégrer une page php ds html file
```php
<?php include("menus.php"); ?>
// Préférer require
<?php require("menus.php"); ?>
```
