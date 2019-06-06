# PHP, pour quoi ?
- Envoyer données au serveur (refresh)

# Syntaxe

**Variable**
```php
$age = 25;        // set a variable
```

# Types

**Float Numbers**
**Int Number**
**String**
```php
$firstName = 'Pedro Sanchez';
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
