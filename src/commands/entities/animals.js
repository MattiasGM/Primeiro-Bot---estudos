const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder,
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
          value: 'chicken',
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
