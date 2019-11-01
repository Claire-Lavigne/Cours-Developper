# Variables superglobales
- `$_SERVER` : valeurs renvoyées par le serveur : nombreuses et très utiles pour certaines (ex $_SERVER['REMOTE_ADDR'] = donne l'adresse IP du client qui a demandé à voir la page)
- `$_ENV` : variables d'environnement données par le serveur (Linux), inutiles
- `$_SESSION` : variables de session stockées sur le serveur le temps de la présence d'un visiteur
- `$_COOKIE` : contient les valeurs des cookies enregistrés sur l'ordinateur du visiteur pour stocker des informations sur l'ordinateur du visiteur pendant plusieurs mois
- `$_GET` : contient les données envoyées en paramètres dans l'URL.
- `$_POST` : variable qui contient les informations qui viennent d'être envoyées par un formulaire.
- `$_FILES` : contient la liste des fichiers qui ont été envoyés via le formulaire précédent.

# Méthode GET

- `index.php`
  - ```<a href="bonjour.php?nom=Dupont&amp;prenom=Jean">Dis-moi bonjour !</a>```
- `bonjour.php`
  - ```<p>Bonjour <?php echo $_GET['prenom'] . ' ' . $_GET['nom']; ?> !</p>```

- modifier `bonjour.php` pour sécuriser l'accès aux données (on ajoute des conditions) :
  - Si les variables existent, on dit bonjour au visiteur
  - S'il manque au moins une variable, on affiche un message d'erreur
```php
<?php
if (isset($_GET['prenom']) AND isset($_GET['nom'])) {
	echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
} else {
	echo 'Il faut renseigner un nom et un prénom !';
}
?>
```

# Méthode POST

## Transmettre des données via un formulaire
- action : page appelée par le formulaire (reçoit et transmet données)
- form : name (nom donné à la variable), value (champs pré-rempli)
- htmlspecialchars : écrit tout code entré dans l'input pour empêcher hack
- fonction strip_tags : retire les balises HTML entrées dans l'input pour empêcher hack

- `index.php`
```html
<p>
    Cette page ne contient que du HTML.<br />
    Veuillez taper votre prénom :
</p>

<form action="cible.php" method="post">
    <p>
        <input type="text" name="prenom" />
        <input type="submit" value="Valider" />
    </p>
    <textarea name="message" rows="8" cols="45">
        Votre message ici.
    </textarea>
    <select name="choix">
        <option value="choix1" selected="selected">Choix 1</option>
        <option value="choix2">Choix 2</option>
        <option value="choix3">Choix 3</option>
        <option value="choix4">Choix 4</option>
    </select>
    <input type="checkbox" name="case" id="case" checked="checked"/> <label for="case">Ma case à cocher</label>
    Aimez-vous les frites ?
        <input type="radio" name="frites" value="oui" id="oui" checked="checked" /> <label for="oui">Oui</label>
        <input type="radio" name="frites" value="non" id="non" /> <label for="non">Non</label>
</form>
```
- `cible.php`
```php
<p>Bonjour !</p>
<p>Je sais comment tu t'appelles, hé hé. Tu t'appelles <?php echo htmlspecialchars($_POST['prenom']); ?> !</p>
<p>Si tu veux changer de prénom, <a href="formulaire.php">clique ici</a> pour revenir à la page formulaire.php.</p>
<?php echo $_POST['nomvariablename']; ?>
```

## Formulaire envoi fichiers
- Si le formulaire propose aux visiteurs d'envoyer un fichier, il faut ajouter l'attribut `enctype`
```html
<form action="cible_envoi.php" method="post" enctype="multipart/form-data">
        <p>
                Formulaire d'envoi de fichier :<br />
                <input type="file" name="monfichier" /><br />
                <input type="submit" value="Envoyer le fichier" />
        </p>
</form>
```

```php
<?php
// Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
{
        // Testons si le fichier n'est pas trop gros
        if ($_FILES['monfichier']['size'] <= 1000000)
        {
                // Testons si l'extension est autorisée
                $infosfichier = pathinfo($_FILES['monfichier']['name']);
                $extension_upload = $infosfichier['extension'];
                $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
                if (in_array($extension_upload, $extensions_autorisees))
                {
                        // On peut valider le fichier et le stocker définitivement
                        move_uploaded_file($_FILES['monfichier']['tmp_name'], 'uploads/' . basename($_FILES['monfichier']['name']));
                        echo "L'envoi a bien été effectué !";
                }
        }
}
?>
```
- voir [tuto](http://sdz.tdct.org/sdz/upload-de-fichiers-par-formulaire.html#Crerleformulaire) pour plus d'infos

## Formulaire avec mot de passe
```php
<?php

// Le mot de passe n'a pas été envoyé ou n'est pas bon
if (!isset($_POST['mot_de_passe']) OR $_POST['mot_de_passe'] != "kangourou")
{
	// Afficher le formulaire de saisie du mot de passe
  <p>Veuillez entrer le mot de passe pour obtenir les codes d'accès au serveur central de la NASA :</p>
  <form action="secret.php" method="post">
      <p>
      <input type="password" name="mot_de_passe" />
      <input type="submit" value="Valider" />
      </p>
  </form>
  <p>Cette page est réservée au personnel de la NASA. Si vous ne travaillez pas à la NASA, inutile d'insister vous ne trouverez jamais le mot de passe ! ;-)</p>
}
// Le mot de passe a été envoyé et il est bon
else
{
	// Afficher les codes secrets
  <h1>Voici les codes d'accès :</h1>
  <p><strong>CRD5-GTFT-CK65-JOPM-V29N-24G1-HH28-LLFV</strong></p>   

  <p>
  Cette page est réservée au personnel de la NASA. N'oubliez pas de la visiter régulièrement car les codes d'accès sont changés toutes les semaines.<br />
  La NASA vous remercie de votre visite.
  </p>
}

?>
