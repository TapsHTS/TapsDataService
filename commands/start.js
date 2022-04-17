const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'start',
    description: 'Démarre le serveur',
    aliases: ['dem', 'dém', 'demarer'],
    usage: 'start',
    async execute(message, args, client) {
        nodeclient.startServer(process.env.SERVERID)
            .then(r => {
                const embedStart = new MessageEmbed()
                    .setTitle("💾 Démarrage du serveur")
                    .setColor('#008000')
                    .setDescription("`✔️ Le serveur a été démarré !`")
                    .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });
                message.channel.send({ embeds: [embedStart] });
            })
    },
};