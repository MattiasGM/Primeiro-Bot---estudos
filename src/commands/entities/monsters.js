const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('monsters')
      .setPlaceholder('Nenhum Monstro selecionado')
      .addOptions(
        {
          label: 'Greyling',
          description: 'Acessar guia do monstro Greyling (Prados)',
          value: 'greyling',
        },
        {
          label: 'Greydwarf',
          description: 'Acessar guia do monstro Greydwarf (Floresta Negra)',
          value: 'greydwarf',
        },
        {
          label: 'Greydwarf Brutamonte',
          description: 'Acessar guia do monstro Greydwarf Brutamonte (Floresta Negra)',
          value: 'greydwarfBrute',
        },
        {
          label: 'Xamã de Greydwarf',
          description: 'Acessar guia do monstro Xamã de Greydwarf (Floresta Negra)',
          value: 'xamaGreydwarf',
        },
        {
          label: 'Troll',
          description: 'Acessar guia do monstro Troll (Floresta Negra)',
          value: 'troll',
        },
        {
          label: 'Esqueleto',
          description: 'Acessar guia do monstro Esqueleto (Floresta Negra/ Pântano/ Câmaras Fúnebre)',
          value: 'skeleton',
        },
        {
          label: 'Restos rançosos',
          description: 'Acessar guia do monstro Restos rançosos (Câmaras Fúnebre)',
          value: 'rancidRemains',
        },
        {
          label: 'Fantasma',
          description: 'Acessar guia do monstro Fantasma (Câmaras Fúnebre)',
          value: 'ghost',
        },
      ),
  );

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Selecione uma das opções:');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('monstros')
    .setDescription('Acesse os guias dos Bosses'),

  async execute(interaction) {
    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
