const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'restart',
    description: 'Redémarre le serveur',
    aliases: ['re', 'redem', 'redemarer'],
    usage: 'restart',
    async execute(message, args, client) {
        nodeclient.restartServer(process.env.SERVERID)
            .then(r => {
                const embedStart = new MessageEmbed()
                    .setTitle("💾 Redémarrage du serveur")
                    .setColor('#ff7f00')
                    .setDescription("`👻 Le serveur redémarre !`")
                    .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });
                message.channel.send({ embeds: [embedStart] });
            })
    },
};