# LIBRABY PURPOSE

- Book = class / table database (UpperCamelCase singular noun)
- title, author, category, ISBN = relevant attributes (camelCase) / column table database
- association between objects = aggregation
  - How many of 'Books' for a 'Borrower' ?
     -  0..* (or *) = from 0 to many
  - How many of 'Borrowers' for a 'Book' ?
     -  1..1 (or 1)
   - If both side as a 1..1 relationship, the numbers can be removed (default behaviour)
   - verbs = the action-based relationship
- association class = Junction Table (for classes with many connections)
   
- PK :
  - column of unique fields that won't ever change
  - primary way that we are going to ask the database for a row
  - field that is auto incremented
- FK (Foreign Key) :
  - column field that has same name in both classes related were one is PK and other FK
  - 1..1 relationships : 1 PK and 1 FK in other table
  - 1..* relationships : FK in both tables
  
- To show the attributes I've added in each class :
  - the primary keys in red
  - the foreign keys in blue
  - the two primary keys for the associated classes of the junction tables in green.
  
- white diamond : A is part of B
- black diamond : A is entirely made of B
- white arrow : A is a subclass/child of B

- Première forme normale (1NF):
  - Chaque cellule d'une table doit contenir une valeur unique et cette valeur doit être élémentaire
  - = each attribute must have only one possible entry (ex : 1 only email for a person)
- Deuxième forme normale (2NF):
  - Chaque attribut de la table doit dépendre de la clé primaire au complet et non d'une partie de la clé.
- Troisième forme normale (3NF):
  - Aucun attribut non-clé doit dépendre d'un autre attribut non-clé.
