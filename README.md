# Auto VC Connection (Discord.js)

Connexion automatique à un channel vocal prédéfini avec Discord.JS 

## Installation

Requiert NodeJS et le module discord.js
```bash
npm i discord.js
```

## Utilisation

Dans le fichier index.js, modifiez les lignes suivantes
```javascript
client.login("token"); # remplacez token par le token de votre bot.

let channel = client.channels.cache.get("channel id"); # remplacez channel id par l'ID du channel souhaité.
```

