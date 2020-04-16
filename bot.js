const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Não me menciona, vão achar que te conheço!! `bds!help`")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let messages = [`Assistindo ${client.users.size} pessoas`,
                    `Monitorando a BDS! | bds!help`]

    setInterval(() => {
        let randomMessages = Math.floor(Math.random() * (messages.length - 1) + 1)
        client.user.setActivity(messages[randomMessages])
    }, 1000)

    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
})

client.on('guildMemberAdd', member => {
   member.send("> Seja bem vindo(a) ao `BDS`! Tomará que se divirta :D");
});

client.login(config.token)