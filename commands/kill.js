const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'kill',
    description: 'Arrête le serveur',
    aliases: ['destroy', 'kil'],
    usage: 'stop',
    async execute(message, args, client) {
        nodeclient.killServer(process.env.SERVERID)
            .then(r => {
                const embedStart = new MessageEmbed()
                    .setTitle("💾 Arrêt forcé du serveur")
                    .setColor('#FF0000')
                    .setDescription("`❌ Le serveur a été arrété avec force !`")
                    .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });
                message.channel.send({ embeds: [embedStart] });
            })
    },
};