const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select')
      .setPlaceholder('Nenhum Animal selecionado')
      .addOptions(
        {
          label: 'Galinha',
          description: 'Acessar guia das galinhas',
          value: 'galinha',
        },
      ),
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName('animais')
    .setDescription('Acesse os guias dos Animais'),

  async execute(interaction) {
    await interaction.reply({ content: 'Selecione uma das opções abaixo:', components: [row] });
  },
};
