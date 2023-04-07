const {
  SlashCommandBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Verificar lantencia!'),

  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true, ephemeral: true });
    interaction.editReply({ content: `Latencia: ${sent.createdTimestamp - interaction.createdTimestamp}ms`, ephemeral: true });
  },
};
