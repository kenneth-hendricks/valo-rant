const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
  if (message.content === "!doesthiswork") {
    message.channel.send("yes");
  }
});

client.login(process.env.DISCORD_TOKEN);
