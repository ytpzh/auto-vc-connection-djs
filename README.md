# Auto VC Connection (Discord.js)

Connexion automatique à un channel vocal prédéfini avec Discord.JS 

## Installation

Requiert NodeJS et le module discord.js
```bash
$ npm i discord.js
```

## Utilisation

Dans le fichier config.json, insérez-y les informations nécessaires.
```yaml
{
    "token":"token du bot", # À remplacer par le token de votre bot.
    "channelID":"ID du channel" # À remplacer par l'ID du channel vocal.
}
```
Ainsi, effectuez dans un invite de commande (dans une console)
```bash
$ node index.js
```

