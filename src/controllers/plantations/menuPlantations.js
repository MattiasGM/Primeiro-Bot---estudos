module.exports = {
  async execute(interaction) {
    if (interaction.isStringSelectMenu()) {
      const selected = interaction.values[0];
      if (selected === 'cenoura') {
        await interaction.reply('Plantações de cenoura');
      } else if (selected === 'nabo') {
        await interaction.reply('Plantações de nabo');
      } else if (selected === 'cebola') {
        await interaction.reply('Plantações de cebola');
      } else if (selected === 'cevada') {
        await interaction.reply('Plantações de cevada');
      } else if (selected === 'linho') {
        await interaction.reply('Plantações de linho');
      } else if (selected === 'futon') {
        await interaction.reply('Plantações de futon');
      } else if (selected === 'chapeu') {
        await interaction.reply('Plantações de chapeu');
      }
    }
  },
};
