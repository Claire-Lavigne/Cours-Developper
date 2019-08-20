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
https://user.oc-static.com/files/59001_60000/59541.png
https://openclassrooms.com/en/courses/918836-concevez-votre-site-web-avec-php-et-mysql/913655-quest-ce-quune-base-de-donnees#/id/r-2174731
Exemple de tables :
- news : stocke toutes les news qui sont affichées à l'accueil ;
- livre_or : stocke tous les messages postés sur le livre d'or ;
- forum : stocke tous les messages postés sur le forum ;
- newsletter : stocke les adresses e-mail de tous les visiteurs inscrits à la newsletter.

# [Gérer phpMyAdmin](https://openclassrooms.com/en/courses/918836-concevez-votre-site-web-avec-php-et-mysql/913893-phpmyadmin)
