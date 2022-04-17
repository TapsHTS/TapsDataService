const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'console',
    description: 'Check la console du serveur',
    aliases: ['cns', 'cs'],
    usage: 'console',
    async execute(message, args, client) {
        if (message.author.id !== '450658007877943316') return message.channel.send('Vous n\'avez pas la permission de faire cette commande !');

        if (!args[0]) return message.channel.send("Veuillez entrer une commande !");
        const input = args.slice(0).join(' ');
        const output = await nodeclient.sendServerCommand(process.env.SERVERID, input);

        const embedConsole = new MessageEmbed()
            .setTitle("💾 Console du serveur")
            .setColor('#303136')
            .addField(':inbox_tray: **Entrée :**', '```js\n> ' + input + '```')
            .addField(':outbox_tray: **Réponse :**', '```js\n' + output + '```')
            .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });
        message.channel.send({ embeds: [embedConsole] });

    },
};