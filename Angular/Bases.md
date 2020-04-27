# Documentation
- angular cli
- angular bootstrap (doc spécifique pour angular) : `npm install ngx-bootstrap --save`

```bash
# installation global
npm install -g @angular/cli
# create front-end paste
ng new my-dream-app   # during processus : yes, scss, no
# go inside and run server + access localhost indicated
cd my-dream-app
ng serve --open
# prod (directory dist)
ng build
# deployment
ng build --prod
```

- Optionnel : avec Helio
  - Couper coller tous fichiers dans racine
  - Supprimer dossier my-dream-app
  - run server in racine and access localhost

```bash
# generate component header
ng g c header
# generate sub component for header
ng g c header/top
# autres
ng generate directive|pipe|service|class|guard|interface|enum|module
```
