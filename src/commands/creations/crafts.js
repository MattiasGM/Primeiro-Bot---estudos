const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select')
      .setPlaceholder('Nenhuma opção selecionado')
      .addOptions(
        {
          label: 'Forja',
          description: 'Acessar guia de criação da forja',
          value: 'forge',
        },
        {
          label: 'Bancada de Pedra',
          description: 'Acessar guia de criação da Bancada de Pedra',
          value: 'stonebanch',
        },
        {
          label: 'Bancada de Trabalho',
          description: 'Acessar guia de criação da Bancada de trabalho',
          value: 'workbench',
        },
      ),
  );

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Selecione uma das opções:');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('crafts')
    .setDescription('Acesse os guias das Bancadas'),

  async execute(interaction) {
    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
