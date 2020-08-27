const Discord = require("discord.js");
const client = new Discord.Client();

const valorantRoleId = "748474101479374919";
const hornUrl =
  "https://media1.tenor.com/images/dfe647c8913c3b5ae373bc84d894c3e8/tenor.gif?itemid=8651046";

client.on("message", async (message) => {
  if (message.content === "!soundthehorn") {
    const valorantMembers = (await message.guild.members.fetch()).filter(
      (member) => {
        return member._roles.includes(valorantRoleId);
      }
    );

    const messageContent = valorantMembers
      .map((member) => {
        return `<@${member.user.id}>`;
      })
      .join(" ");

    message.channel.send(messageContent, { files: [hornUrl] });
  }
});

client.login(process.env.DISCORD_TOKEN);
