const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    client.user.setActivity('Valheim');
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
