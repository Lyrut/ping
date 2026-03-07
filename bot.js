const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ]
});

const userToWatch = "171671218188058625";
const userToNotify = "268861229487882241";

client.on("voiceStateUpdate", async (oldState, newState) => {

  if (newState.member.id === userToWatch && newState.channelId !== null) {

    const user = await client.users.fetch(userToNotify);
    user.send(`${newState.member.user.username} vient de rejoindre ${newState.channel.name}`);

  }

});

client.login(process.env.TOKEN);
