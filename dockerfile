# Utiliser l'image officielle Nginx dans sa version "alpine" (très légère)
FROM nginx:alpine

# Copier tous les fichiers du dossier actuel vers le dossier web par défaut de Nginx
COPY . /usr/share/nginx/html

# Indiquer que le conteneur écoute sur le port 80
EXPOSE 80