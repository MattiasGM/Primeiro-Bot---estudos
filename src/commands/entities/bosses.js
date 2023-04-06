const {
  SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder,
} = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('bosses')
      .setPlaceholder('Nenhum Boss selecionado')
      .addOptions(
        {
          label: 'Eikthyr',
          description: 'Acessar guia do boss Eikthyr',
          value: 'eikthyr',
        },
        {
          label: 'Elder',
          description: 'Acessar guia do boss Eikthyr',
          value: 'elder',
        },
        {
          label: 'Bonemass',
          description: 'Acessar guia do boss Bonemass',
          value: 'bonemass',
        },
        {
          label: 'Moder',
          description: 'Acessar guia do boss Moder',
          value: 'moder',
        },
        {
          label: 'Yagluth',
          description: 'Acessar guia do boss Yagluth',
          value: 'yagluth',
        },
        {
          label: 'Queen',
          description: 'Acessar guia do boss Queen',
          value: 'queen',
        },
      ),
  );

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Selecione uma das opções:');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bosses')
    .setDescription('Acesse os guias dos Bosses'),

  async execute(interaction) {
    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
