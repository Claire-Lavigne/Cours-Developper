# PHP, pour quoi ?
- Communiquer avec serveur :
  - generate dynamic content
  - encrypt data

# To use PHP what do I need ? (xampp / mamp / wamp)
- install a web server (Apache)
- install PHP
- install a database (MySQL)

# Concurrents
- ASP .NET (C#)
- Ruby on Rails (Ruby)
- Django (Python)
- JEE ou "Java EE" (Java et JSP ou "Java Server Pages")

# [Manuel PHP](https://www.php.net/manual/fr/index.php)

# Show errors
Fichier `info.php` dans htdocs
```php
<?php
phpinfo();
```
- open file in browser
- find line "Loaded Configuration File" => open file php.ini
- search "error_reporting" => "error_reporting = E_ALL"
- search "display_errors" => "display_errors = On"
- search "pdo_mysql" => "extension=php_pdo_mysql.dll" without `;` at the beginning
- with XAMPP only search "pdo_mysql.default_socket" => "pdo_mysql.default_socket = /opt/lampp/var/mysql/mysql.sock"
- save + restart (Apache) server

# Errors Meaning
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

# Variables
- **Types** : string, int, float, bool, NULL (no datas)
- **Operators** : `+ - * / % ( )`
```php
$age_visitor = 25;        // set
$age_visitor = 26.5;      // modify
echo $age_visitor;        // show value

// Constant 
define("WELCOME","Hello Geeks!"); 
echo WELCOME; 

// Concatenate
echo "L'individu a $age_visitor ans <br>";        // easier
echo 'L\'indiv a ' .$age_visitor. 'ans <br>';     // more used
```

# Show variable type + value
```php
var_dump($names);

// debogage (loop arrays)
echo '<pre>';
print_r($names);
echo '</pre>';

// <pre><?php print_r ($names); ?></pre>
```

# Arrays
## Numeric
```php
$names = ['François', 'Michel', 'Nicole', 'Véronique', 'Benoît'];
$names[0];

$names[] = 'Blue'; // push at the end
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

# Loop (great for arrays)
## FOR
```php
for ($x = 0; $x < 5; $x++) {
   echo $names[$x];
}
// $names[0], ...
```
## FOREACH
```php
foreach($names as $name) {
    echo $name; 
}
// $names[0], ...

foreach($names as $key => $name) {
    echo "$key = $name";
}
// [names] = François, ...
```
## WHILE
```php
$age = 1;
while ($age <= 100) {
  echo $age;
  $age++;
}
```

# Conditions
## Switch
```php
$note = 10;
switch ($note) {
  case 9:
      echo "Mauvais";
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

## If / Elseif / Else
- **Comparisons** : `== != < <= > >= && ||`
```php
<?php
$variable = 23;
if ($variable) {
  // if true
}

if (!$variable) {
  // if false
}
?>
```
- **Ternaire**
```php
$age = 24;
$majeur = ($age >= 18) ? true : false;

// means
if ($age >= 18) {
   $majeur = true;
} else {
   $majeur = false;
}
```

# Fonctions
## Existantes
- [Liste des fonctions PHP par catégorie](https://www.php.net/manual/fr/funcref.php)
- `$jour = date('d/m/Y h:i:s');`
- `empty()`
- `exit()`
- `isset()`

## Personnalisées
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

# Include
```php
<?php include("menus.php"); ?>
// Same but gives error if file doesn't exist
<?php require("menus.php"); ?>
// Same but verify if file wasn't already imported
<?php include_once("menus.php"); ?>
<?php require_once("menus.php"); ?>
```
