const { NodeactylClient } = require('nodeactyl');
const nodeclient = new NodeactylClient(process.env.URL, process.env.NODE_API);
const { MessageEmbed } = require('discord.js');

function bytesToSize(bytes, seperator = " ") {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
}

module.exports = {
    name: 'status',
    description: 'Check le status du serveur Survie',
    aliases: ['stats', 'statut', 'st'],
    usage: 'status',
    async execute(message, args, client) {
        const status = await nodeclient.getServerStatus(process.env.SERVERID)
        const usages = await nodeclient.getServerUsages(process.env.SERVERID)
        const embedStatus = new MessageEmbed()
            .setTitle("💾 Status du serveur")
            .setFooter({ text: 'Taps Data Service', iconURL: process.env.LOGO });

        if (status === "running") {
            embedStatus.setColor('#008000');
            embedStatus.setDescription("`✔️ Le serveur est en ligne !`")
            embedStatus.addField('\u200B', '**🔋 Consomation: **')
            embedStatus.addField('<:ram:744823868849651755> **RAM :**', `\`${bytesToSize(usages.resources.memory_bytes)}/4 GB\``, true)
            embedStatus.addField('<:cpu:744823868694331463> **CPU :**', `\`${Math.round(100*usages.resources.cpu_absolute)/100}%\``, true)
            embedStatus.addField(':floppy_disk: **DISK :**', `\`${bytesToSize(usages.resources.disk_bytes)}/9.77 GB\``, true)

        } else if (status === "offline") {
            embedStatus.setColor('#FF0000');
            embedStatus.setDescription("`❌ Le serveur est hors ligne !`")

        } else {
            embedStatus.setColor('#ff7f00');
            embedStatus.setDescription("`👻 Un erreur est survenue ! \n Veuillez réessayer plus tard.`")
        }
        message.channel.send({ embeds: [embedStatus] });
    },
};

//