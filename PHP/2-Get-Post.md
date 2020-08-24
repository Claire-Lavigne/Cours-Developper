# Variables superglobales = accessibles partout
- `$_SERVER` : valeurs renvoyées par le serveur : nombreuses et très utiles pour certaines (ex $_SERVER['REMOTE_ADDR'] = donne l'adresse IP du client qui a demandé à voir la page)
- `$_ENV` : variables d'environnement données par le serveur (Linux), inutiles
- `$_SESSION` : variables de session stockées sur le serveur le temps de la présence d'un visiteur
- `$_COOKIE` : contient les valeurs des cookies enregistrés sur l'ordinateur du visiteur pour stocker des informations sur l'ordinateur du visiteur pendant plusieurs mois
- `$_GET` : contient les données envoyées en paramètres dans l'URL.
- `$_POST` : variable qui contient les informations qui viennent d'être envoyées par un formulaire.
- `$_FILES` : contient la liste des fichiers qui ont été envoyés via le formulaire précédent.

# Form
```php
<form action="cible.php" method="post">
<p>
    <input type="text" name="prenom" />
    <input type="text" name="nom" />
    <input type="submit" value="Valider" />
</p>
</form>
```

# Méthode GET
- url : `bonjour.php?nom=Dupont&amp;prenom=Jean`
```php
<?php
// si variables existent
if (isset($_GET['prenom']) AND isset($_GET['nom'])) {
	echo "Bonjour $_GET['prenom'] $_GET['nom'] !";
} else {
	echo 'Il faut renseigner un nom et un prénom !';
}
?>
```

# Méthode POST
- action : page appelée par le formulaire (reçoit et transmet données)
- form : name (nom donné à la variable), value (champs pré-rempli)
- htmlspecialchars : écrit tout code entré dans l'input pour empêcher hack
- fonction strip_tags : retire les balises HTML entrées dans l'input pour empêcher hack

```php
<?php echo htmlspecialchars($_POST['prenom']); ?> !
<?php echo $_POST['nomvariablename']; ?>
```

## Formulaire avec envoi fichiers
index.html
```html
<form action="cible_envoi.php" method="post" enctype="multipart/form-data">
        <p>
                Formulaire d'envoi de fichier :<br />
                <input type="file" name="monfichier" /><br />
                <input type="submit" value="Envoyer le fichier" />
        </p>
</form>
```
infos.php
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
- [plus d'infos](http://sdz.tdct.org/sdz/upload-de-fichiers-par-formulaire.html#Crerleformulaire)
