const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'greyling.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x93c47d)
  .setTitle('Greyling')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Greyling!')
  .setImage('attachment://greyling.png')
  .addFields(
    { name: 'Descrição:', value: '*Greyling são monstros hostis encontradas em Valheim.*' },
    { name: 'Localização: *Prado.*', value: '\u200B' },
    { name: 'Drops:', value: '1 Resina (100%)' },
    { name: 'Vida e Dano:', value: '20HP, 5 Dano Cortante', inline: true },
    { name: 'Spawn:', value: 'Em qualquer lugar em florestas de Prados.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Fogo*', inline: true },
    { name: 'Imune:', value: '*Espírito*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Espante-os com tochas.' },
  );

module.exports = {
  id: 'greyling',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
