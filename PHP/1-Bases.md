# PHP, pour quoi ?
- Envoyer données au serveur (refresh + code caché)

# Concurrents
- ASP .NET (C#)
- Ruby on Rails (Ruby)
- Django (Python)
- JEE ou "Java EE" (Java et JSP ou "Java Server Pages")

# Afficher erreurs : info.php
```php
<?php

phpinfo();
```
- line "Loaded Configuration File" => chemin d'accès d'un fichier => open this file
- search "error_reporting" => il faut qu'il soit écrit "error_reporting = E_ALL"
- search "display_errors" => il faut qu'il soit écrit "display_errors = On"
- enregistrer fichier
- relancer serveur Apache (ou autre)

# Syntaxe
**Init (in html or php file)**
```php
<?php
// instructions (closing tag optional)
?>
```

**Variable**
```php
$age_visitor = 25;        // set a variable
$age_visitor = 26;        // modify the variable
echo $age_visitor;        // show the value of variable

echo "Le visiteur a $age_visitor ans";          // + simple
echo 'Le visiteur a ' .$age_visitor. 'ans';     // + utilisé
```
:warning: Les variables ne s'affichent pas à l'origine ! On affiche leurs données avec ```echo``` ou ```print```

# Types de variables
**String**
```php
$firstName = 'Pedro Sanchez';

// "..." posible but not recommended
// \     to escape " or '
```

**Int(egers)**
```php
$age = 3;

// Calcul
$nombre = 3 - (1 + 2) * 2 / 2 % 5;        // % division dont la valeur est le reste
$resultat = ($nombre + 5);
```

**Float**
```php
$age = 15.5;
```

**Bool(ean)**
```php
$married = true;
$divorced = false;
```

**NULL**
```php
$age = NULL;            // no datas
```

**Comparaisons**
```php
$age = 20;    // Declare a variable
$age == 10    // Equal to
$age != 10    // Not equal to
$age < 10;
$age <= 10;
$age > 10;
$age >= 10
&&
||
```

# Tableau associatif
```php
$date = [
  "year" => 2017,
  "month" => 'January',
];

$date["year"];      // afficher 2017
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
<? php
$age = 8;
if ($age <=12) {
  echo "Salut gamin !";
  $authorisation_entrer = "oui";
} else {
  echo "Trop vieux"
  $authorisation_entrer = "non";
}
echo "Pouvez-vous entrer ? $authorisation_entrer";
?>
```
Cas spécial booleans
```php
<?php
$age = 24;
if ($age >= 18) {
	$majeur = true;
} else {
	$majeur = false;
}

// short syntaxe
$majeur = ($age >= 18) ? true : false;
?>
```

**IF ELSEIF ELSE**
```php
<? php
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
?>
```

**Switch**
```php
<?php
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
?>
```

# Boucle
**While**
```php
<?php
$age = 1;
while ($age <= 100) {
  echo 'Liste des âges : ' .$age. '<br/>';
  $age++;
}
?>
```
**for**
```php
<?php
for ($age = 1; $age <= 100; $age++; {
  echo 'Liste des âges : ' .$age. '<br/>';
}
?>
```
