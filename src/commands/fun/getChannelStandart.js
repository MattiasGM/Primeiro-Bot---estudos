const {
  SlashCommandBuilder,
} = require('discord.js');

module.exports = {
  channel: '',
  data: new SlashCommandBuilder()
    .setName('canal-padrao')
    .setDescription('Defina um canal padrão para o bot enviar Mensagem!')
    .addChannelOption((option) => option.setName('channel')
      .setDescription('Selecionar Canal')),

  async execute(interaction) {
    const channel = interaction.options.getChannel('channel');
    interaction.reply({ content: `canal ${channel.name} Registrado!`, ephemeral: true });
    if (!channel) return;
    this.channel = channel.id;
  },
};
