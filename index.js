const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
  const cargo = member.guild.roles.cache.get('1461924902339870916');

  if (!cargo) return console.log('Cargo não encontrado!');

  try {
    await member.roles.add(cargo);
    console.log(`Cargo dado para ${member.user.tag}`);
  } catch (err) {
    console.error('Erro ao dar cargo:', err);
  }
});

client.login(process.env.TOKEN);