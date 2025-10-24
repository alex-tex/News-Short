<img width="2519" height="1351" alt="24_12_26_1830" src="https://github.com/user-attachments/assets/40d1e770-cc94-4102-8502-eaf8b6bb9945" />
## Prérequis!
- Compte NewsAPI.org et clé API

## Démarrage rapide
1. Clonez ou téléchargez ce dépôt.
2. Définissez votre clé API :
   - Ouvrez java/algorithm.js
   - Remplacez l'espace réservé :
     - const apiKey = "YOUR_API_KEY"
   - Ne mettez pas votre clé réelle dans un repo public.
3. Exécutez un serveur statique local (l'un des suivants) :
   - VS Code Live Server : Ouvrez le dossier et cliquez sur "Go Live"
   - Node : npx serve .
4. Ouvrez :
   - http://localhost:PORT/Pages/index.html

## Utilisation
- Cliquez sur une catégorie dans la barre de navigation pour filtrer.
- Faites défiler l'écran pour afficher d'autres articles.
- Les liens ouvrent l'article complet dans un nouvel onglet.

## Dépannage
- Si rien ne se charge, vérifiez que la clé API est valide et que le taux n'est pas limité.
- Servez par http(s). L'ouverture via file:// bloquera la récupération.
- Vérifiez le réseau DevTools pour les erreurs 401/429.

## Note de sécurité
- Les clés API côté client sont visibles par les utilisateurs. Ne publiez pas les clés privées.
- Pour la production, faites passer les demandes par un backend ou une fonction sans serveur et conservez la clé dans les variables d'environnement (.emv) côté serveur.
