# PHP, pour quoi ?
- Envoyer données au serveur (refresh)

# Syntaxe
**PHP document**
```php
<?php
// ...
?>                        // if only PHP code, optionnal
```

**Variable**
```php
$age_visitor = 25;        // set a variable
$age_visitor = 26;        // redéfinition variable (??)
echo $age_visitor;        // show the value of variable

echo "Le visiteur a $age_visitor ans";          // + simple
echo 'Le visiteur a ' .$age_visitor. 'ans';     // + utilisé
```
::warning:: Les variables ne s'affichent pas à l'origine ! On affiche leurs données avec echo

# Types

**String**
```php
$firstName = 'Pedro Sanchez';

// "..." posible but not recommended
// \     to escape " or '
```

**Numbers**
```php
// Int(egers)
$age = 3;

// Float
$age = 15.5;

// Calcul
$nombre = 3 - (1 + 2) * 2 / 2 % 5;        // % division dont la valeur est le reste
$resultat = ($nombre + 5);
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

**IF ELSE ELSEIF**
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
ou
```php
<? php
$authorisation_enter = "oui";               // is true
if ($authorisation_enter == "oui") {        // if true
// short syntaxe
// if ($authorisation_enter)
  echo "Salut gamin !";
} elseif ($authorisation_enter == "non" {  // is false
// short syntaxe
// elseif (!$authorisation_enter)
  echo "Trop vieux"
} else {
  echo "C'est quoi ton âge ?"
}
?>
```

```php
//   == > < >= <= != && ||
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
