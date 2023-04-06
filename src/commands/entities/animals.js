const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('animals')
      .setPlaceholder('Nenhum Animal selecionado')
      .addOptions(
        {
          label: 'Galinha',
          description: 'Acessar guia das galinhas',
          value: 'chicken',
        },
        {
          label: 'Javali',
          description: 'Acessar guia das galinhas',
          value: 'boar',
        },
      ),
  );

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Selecione uma das opções:');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('animais')
    .setDescription('Acesse os guias dos Animais'),

  async execute(interaction) {
    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
