# Projet Git 

## Objectif
Mettre en oeuvre uns stratégie de branche claire et collaborative, intégrer progressivement des fonctionnalités dans une arborescence Git structurée, maitriser les commandes Git essentielles : création des branches, commits, fusions.

---

## Stratégie de Branchement Adoptée

- `main` : branche principale, version **stable** et prête à être publiée.
- `dev` : branche de **développement intégrée**, point de convergence des tests validés.
- `feature/*` : branches de **fonctionnalités spécifiques** :
  - `feature/html-structure` : structure HTML (index, contact, services).
  - `feature/css-theme` : design CSS du site.
  - `feature/js-interactions` : comportements/interactions JavaScript.
- `test/*` : branches pour faire des **tests intermédiaires** (ex. `test/frontend`).

---

## Étapes suivies
1. Initialisation du projet
2. Renommer la branche principale master → main
3. Création de la branche dev à partir de main
4. Création des branches fonctionnalités
5. Création d'une branche de test et fusion des fonctionnalités
6. Fusion dans dev, puis dans main
7. Connexion au dépôt distant GitHub
8. Envoi des branches

## Commandes Git Utilisées
```bash
git init
git add .
git commit -m 
git branch
git checkout
git checkout -b 
git merge 
git remote add origin 
git push -u
git push origin 