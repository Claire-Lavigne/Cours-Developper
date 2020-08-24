# To init connection
- mysql_ : obsolète
- mysqli_
- PDO : recommended

# LOCALHOST
```php
// host dbname user password
<?php
// Sous WAMP
$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');

// Sous MAMP
$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
?>
```

# PROD
```php
<?php
// connect
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

// make request
$reponse = $bdd->query('SELECT * FROM jeux_video') or die(print_r($bdd->errorInfo()));

// show results
$donnees = $reponse->fetch();

// show every line from each columns of table
while ($donnees = $reponse->fetch())
{
    echo $donnees['nom'];
    echo $donnees['possesseur'];
    echo $donnees['prix']
    echo $donnees['console'];
    echo $donnees['nbre_joueurs_max'];
    echo $donnees['commentaires'];
}

// Close request
$reponse->closeCursor(); 
?>
```

## + Secure
```php
<?php
// SELECT / INSERT INTO / UPDATE / DELETE
$req = $bdd->prepare('SELECT nom, prix FROM jeux_video WHERE possesseur = :possesseur AND prix <= :prixmax');
$req->execute(['possesseur' => $_GET['possesseur'], 'prixmax' => $_GET['prix_max']]);
?>
```
