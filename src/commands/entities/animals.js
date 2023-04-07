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
          label: 'Javali',
          description: 'Acessar guia dos Javalis',
          value: 'boar',
        },
        {
          label: 'Cervo',
          description: 'Acessar guia dos Cervos',
          value: 'deer',
        },
        {
          label: 'Lagarto',
          description: 'Acessar guia dos Lagartos',
          value: 'lizard',
        },
        {
          label: 'Peixe',
          description: 'Acessar guia dos Peixes',
          value: 'fish',
        },
        {
          label: 'Serpente Marinha',
          description: 'Acessar guia das Serpentes Marinhas',
          value: 'serpent',
        },
        {
          label: 'Leviatã',
          description: 'Acessar guia dos Leviatãs',
          value: 'leviathan',
        },
        {
          label: 'Lobo',
          description: 'Acessar guia dos Lobos',
          value: 'wolf',
        },
        {
          label: 'Lox',
          description: 'Acessar guia dos Lox',
          value: 'lox',
        },
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
