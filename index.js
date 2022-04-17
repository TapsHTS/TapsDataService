const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
const fs = require('fs');
const prefix = process.env.PREFIX;
client.commands = new Discord.Collection();

//Create a folder named 'commands' in root
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command, command.description);
    console.log('[✔️  ] ' + command.name);
}

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(x => x.aliases && x.aliases.includes(cmd));

    if (command) command.execute(message, args, client);
    else return;
});
client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log(`${client.user.username} is online !`);
    client.user.setStatus('dnd');
    client.user.setActivity('des données', { type: 'WATCHING' });
});
