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

# Arrays
## Numeric
```php
$names = ['François', 'Michel', 'Nicole', 'Véronique', 'Benoît'];
$names[0];
```
## Associative : key (string/int) --> value
```php
$date = [
  "year" 	=> 2017,
  "month" 	=> 'January',
  1 		=> 'start'
];

$date["year"];
```
## Multidimensional : array(s) inside array

## Loop array
```php
// FOR
for ($x = 0; $x < 5; $x++) {
   echo $names[$x];
}
// $names[0], ...

// FOREACH
foreach($names as $name) {
    echo $name; 
}
// $names[0], ...

foreach($names as $key => $name) {
    echo "$key = $name";
}
// [names] = François, ...

// PRINT_R
echo '<pre>';
print_r($prenoms);
echo '</pre>';
```

## If / Elseif / Else
- **Comparisons** : `== != < <= > >= && ||`

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
- `$jour = date('d/m/Y')`;

**Exemple : fonction pour dire bonjour aux visiteurs**
```php
// function with default parameter 
function person($name, $age=12)  
{ 
    echo "$name is $age years old \n"; 
} 
person("Ram", 15); // Ram is 15 y-o
person("Adam");    // Adam is 12 y-o

// function with return
function calculCost($num1, $num2, $num3)  
{ 
    $product = $num1 * $num2 * $num3; 
    return $product;
} 
$value = calculCost(2, 3, 5); 
echo "The product cost $value"; // The product cost 30
```

# 
```php
// Intégrer une page php dans une autre
<?php include("menus.php"); ?>
// Intégrer fonction/classe...
<?php require("menus.php"); ?>
```
