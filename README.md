# CalculApp — Calculatrice Web Conteneurisée

Calculatrice web déployée dans le cadre du projet final
**« Déployer et exploiter une application web »**.

🔗 **En ligne** : https://calculapp.planbadge.fr

## Fonctionnalités
- Opérations de base : `+`, `−`, `×`, `÷` et parenthèses
- Effacement (C) et calcul instantané
- Interface responsive (HTML / CSS Grid)

## Pile technique
| Couche | Technologie |
|---|---|
| Frontend | HTML / CSS / JavaScript |
| Serveur web | Nginx (conteneur Docker) |
| Base de données | PostgreSQL (provisionnée pour évolution) |
| Déploiement | Coolify (HTTPS automatique) |

## Architecture
`Utilisateur → Internet → Coolify (reverse-proxy + TLS) → Conteneur Nginx`

Un service PostgreSQL est provisionné dans `docker-compose.yml` afin de préparer
la persistance de l'historique des calculs (évolution future identifiée).

## Lancer en local
\`\`\`bash
docker build -t calculapp .
docker run -p 8080:80 calculapp
# → http://localhost:8080
\`\`\`

## Déploiement
Déployé sur **Coolify** à partir de ce dépôt GitHub : build de l'image Docker,
domaine public + certificat HTTPS générés automatiquement.

## Auteurs
- Nassim Fadili — [@eightworks88](https://github.com/eightworks88)
- Simão Pinho Da Silva — [@simaosilva85](https://github.com/simaosilva85)
- Clément Cuville — [@cuclement](https://github.com/cuclement)