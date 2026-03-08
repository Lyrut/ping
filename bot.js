const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ]
});

const userToWatch = "1475740283537723474";
const userToNotify = "268861229487882241";

client.on("voiceStateUpdate", async (oldState, newState) => {

  if (newState.member.id === userToWatch && newState.channelId !== null) {

    const user = await client.users.fetch(userToNotify);
    user.send(`${newState.member.user.globalName} が' ${newState.channel.name} に参加しました`);

  }

});

client.login(process.env.TOKEN);
