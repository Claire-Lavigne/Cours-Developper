# MVC
- **Model** = gestion des données (datas)
- **View** = gestion du rendu
- **Controler** = lien model-view, gestion de la réponse à l'utilisateur

# 1 classe = 1 tâche (idem avec fonctions)

# Design Patterns
- Solutions aux problèmes communs

## CREATIONNELS
- **Factory Method** : 1 interface pour plsr objets (mêmes fonctions)
- **Prototype** : copier des objets pour small modifs
- **Builder** : pr créer objets complexes en plusieurs étapes
- **Singleton** (à éviter) : gestion BDD / accéder à des informations globalement / empêcher une classe d'être instanciée 2x

## STRUCTURAUX
- **Adapter** : objets ayant des interfaces incompatibles
- **Composite** : organiser objets sous forme d'arbre
- **Decorator** : enrichir un objet avec nouveaux comportements sans le modifier

## COMPORTEMENTAUX
- **Observer/Event Dispatcher** : créer un système d’événements avec des objets capables "d’écouter" et de réagir au changement d’autres objets
- **Strategy** : interchanger liste d'algorithmes
- **State** : 1 objets = plsr états

# [SOLID](https://guillaume-richard.fr/principe-solid-simplifies-avec-des-exemples-en-php/)
- 1 classe = 1 responsabilité (idem avec fonctions)
