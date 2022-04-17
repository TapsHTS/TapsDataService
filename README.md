<img src="https://user-images.githubusercontent.com/61658427/163720619-20cd2a64-08b3-46f6-9090-24b86aad5435.png" height="75">

# 💾 Taps Data Service

Un bot pour analyser des serveurs Pterodactyl

## 📜 Configuration

Dans le fichier `.env.exemple` *(à renomer `.env`)*
  <ul>
    <li><code>NODE_API</code></li>
    <li><code>URL</code></li>
    <li><code>SERVERID</code></li>
    <li><code>TOKEN</code></li>
    <li><code>LOGO</code></li>
  </ul>

## 🎹 Commandes

<ul>
  <ul>
    <h4>👨‍⚖️ Utilisateur</h4>
    <li><code>status</code> Indique si le serveur est allumé, sa consomation en <strong>ram, disk et cpu.</strong> </li>
     <li><code>start</code> Démarre le serveur. </li>
    <li><code>restart</code> Redémarre le serveur. </li>
  </ul>
    <ul>
    <h4>👮‍♂️ Administrateur</h4>
    <li><code>console</code> Envoie une commande dans la console <strong>(!console say Hello)</strong> </li>
     <li><code>stop</code> Arrête le serveur. </li>
    <li><code>kill</code> Kill le serveur. </li>
  </ul>
</ul>

## ➕ Modules

Utilisation de `discord.js` et `nodeactyl`.
