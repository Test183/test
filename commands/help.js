const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.author.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Meus comandos")
        .setDescription("Meus comandos ainda estão em desenvolvimento, então mostrarei apenas os príncipais!")
        .setFooter("bds!avatar bds!ban, bds!kick, bds!mute, bds!unmute, bds!clear, bds!ping, bds!guild, bds!uptime!!!")
        .setColor("RANDOM")

        message.author.send(pEmbed)
}

module.exports.help = {
    name: "help"
}