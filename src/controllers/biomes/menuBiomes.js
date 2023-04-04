module.exports = {
  async execute(interaction) {
    if (interaction.isStringSelectMenu()) {
      const selected = interaction.values[0];
      if (selected === 'prado') {
        await interaction.reply('Bioma Prado');
      } else if (selected === 'florestaNegra') {
        await interaction.reply('Bioma Floresta Negra');
      } else if (selected === 'pantano') {
        await interaction.reply('Bioma Pântano');
      } else if (selected === 'montanha') {
        await interaction.reply('Bioma Montanhas');
      } else if (selected === 'planicie') {
        await interaction.reply('Bioma Planicies');
      } else if (selected === 'mistlands') {
        await interaction.reply('Bioma Mistlands');
      } else if (selected === 'oceano') {
        await interaction.reply('Bioma Oceano');
      }
    }
  },
};
