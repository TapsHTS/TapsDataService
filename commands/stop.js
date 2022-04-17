const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'stop',
    description: 'Arrête le serveur',
    aliases: ['close', 'cl', 'stp'],
    usage: 'stop',
    async execute(message, args, client) {
        nodeclient.stopServer(process.env.SERVERID)
            .then(r => {
                const embedStart = new MessageEmbed()
                    .setTitle("💾 Arrêt du serveur")
                    .setColor('#FF0000')
                    .setDescription("`❌ Le serveur a été arrété !`")
                    .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });
                message.channel.send({ embeds: [embedStart] });
            })
    },
};