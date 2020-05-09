# Gestion de projets AGILE

## Valeurs
- Les **individus** et leurs **interactions** sont plus importants que les processus et les outils,
- Un **logiciel qui fonctionne** est mieux qu’une documentation exhaustive,
- **Collaborer avec les clients** est préférable à la négociation contractuelle,
- **S’adapter au changement** est mieux que de suivre un plan.

## Pratiques
### User stories
- En tant que... je veux que... pour que...
- Etapes : 
  - Manuel utilisateur (spécifications fonctionnelles) : ce que fait la story
  - Doc technique (architecture)
  - Code
  - Tests

### Pair Programming
Un écran, un code, une fonctionnalité, deux programmateurs

### Continuous integration (CI)
Livrer nouvelle fonctionnalité :
- après quelques semaines ou mois
- ajoutée en prod et intégrée à la précédente

### Acceptance Testing
Valider une story (avec tests et conditions à remplir) avant de passer à l'autre

### Iteration Planning / Planning Game / Sprint Planning
- 1 User Story = 1 étape de développement
- Planning flexible et redéfini à chaque nouvelle User Story
- Réunion pour estimer la durée de réalisation de chaque User Story

### Daily Stand-Up Meeting / Daily Scrum
- Réunion quotidienne debout (30min max)
- Chacun présente ce qu'il a fait la veille, ce qu’il fera aujourd’hui et un point bloquant

## Méthodes
### Dynamic systems development methods (DSDM)
intégration constante des clients

### Feature Driven Development (FDD)
créer un logiciel qui s’adapte efficacement aux changements de demandes

### Extreme Programming (XP)
centré sur les pratiques

### Scrum
- flexible, l'équipe travaille ensemble pour atteindre un but commun
- Début du projet : projet découpé en fonctionnalités listées dans un backlog (tableau)
- 1ère version à mettre en ligne : minimale, fonctionnalités essentielles et prioritaires
- Chaque mise en production ou "release" est constituée de plusieurs sprints
  - Sprint 0 : organisation du projet, connaissance du produit et des attentes des utilisateurs, recrutement équipe, création backlog
  - 1 sprint = 1 ou 2 semaines pour développer une ou plusieurs fonctionnalités ou Stories (décidées par l’équipe et le Product Owner ou "utilisateur final/client")
  - réunions quotidiennes pour que le ScrumMaster détermine l’avancement/les ajustements par rapport aux engagements de chacun
  - fin d'un sprint = nouvelle fonctionnalité ajoutée au projet et nouveau sprint
  - inspection = évaluation et feedback du sprint pour ajuster le backlog pour le sprint suivant

## Les responsabilités et les missions des intervenants

### Le Product Owner
- Utilisateurs finaux ou clients du projet
- Définit le contenu du produit et la gestion des priorités
- Doit savoir pourquoi les utilisateurs vont utiliser ce produit ?
- Créé le(s) "persona" ou portrait-robot de l'utilisateur du produit (prénom, age, histoire, habitudes)
- Alimente régulièrement le backlog en nouvelles fonctionnalités et trie les anciennes par ordre de priorité
- Définit l’objectif d’une release et prend les décisions sur son contenu.
- Répond aux questions sur le produit
- Définir les tests d’acceptation et fait passer les tests.

### Le ScrumMaster
- Pas de chef de projet
- Aide l’équipe à appliquer les principes de Scrum (ex : guide la rédaction de User Storie)
- Elimine les obstacles, “protège” l’équipe en filtrant toute demande extérieure

### L’équipe
- Réalise le produit et définit l'organisation
- Membres choisis par le Scrum Master selon motivation et compétences
