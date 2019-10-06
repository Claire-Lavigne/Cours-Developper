- MySQL : BDD - SGBD (Système de Gestion de Base de Données)
- phpMyAdmin : gérer MySQL
- SQL : langage qui communique à la BDD
- PHP : langage qui communique à MySQL

# MySQL, pour quoi ?
- Stocker des informations et les organiser (messages de forum, membres…)

# Concurrents
- Oracle : célèbre, complet et puissant mais payant
- MariaDB : Copie de MySQL libre et indépendante
- Microsoft SQL Server : payant et utilisé avec ASP .NET
- PostgreSQL : moins connu, fonctionnalitées avancées, libre et gratuit

```sql
SELECT id, auteur, message, datemsg FROM livreor ORDER BY datemsg DESC LIMIT 0, 10
```

# Structure BDD
[Exemple de tables](https://openclassrooms.com/en/courses/918836-concevez-votre-site-web-avec-php-et-mysql/913655-quest-ce-quune-base-de-donnees#/id/r-2174731) :
- news : stocke toutes les news qui sont affichées à l'accueil ;
- livre_or : stocke tous les messages postés sur le livre d'or ;
- forum : stocke tous les messages postés sur le forum ;
- newsletter : stocke les adresses e-mail de tous les visiteurs inscrits à la newsletter.

# [Gérer phpMyAdmin to set up a database](https://openclassrooms.com/en/courses/918836-concevez-votre-site-web-avec-php-et-mysql/913893-phpmyadmin)

# Use a database
- Create : add a record to the cat table
```sql
INSERT INTO `cat` (`cat_id`, `name`, `breed`, `has_claws` ) 
VALUES (NULL, 'Haldeman', 'Japanese Bobtail', '0'); 
```
- Read : 
```sql
# read a complete row in the cat table
SELECT * FROM `cat` WHERE `cat_id` = 2;

# read the cat name column
SELECT `name` FROM `cat` WHERE `cat_id` = 2;

# read the cat id with harold or something similar
SELECT * FROM `cat` WHERE `name` LIKE 'Harold';
```
- Update : change the name of a cat
```sql
UPDATE `cat` SET `name` = 'Lester Pickles' WHERE `cat_id` = '2';
```
- Destroy : delete a record from the cat table
```sql
DELETE FROM `cat` WHERE `cat_id` = 3;
```
