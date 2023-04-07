const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'troll.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Trolls')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Trolls!')
  .setImage('attachment://troll.png')
  .addFields(
    { name: 'Descrição:', value: '*Trolls são criaturas Hostis encontrado em Florestas Negras. São humanóides enormes e atrapalhados, com membros longos e musculosos e cabelos loiros.*' },
    { name: 'Localização: *Floresta Negra.*', value: '\u200B' },
    { name: 'Drops 0 Estrelas:', value: '1 Troféu Troll (50%), 20-29 Moedas, 5 Pele de troll', inline: true },
    { name: 'Drops 1 Estrelas:', value: '1 Troféu Troll (50%), 40-58 Moedas, 10 Pele de troll', inline: true },
    { name: 'Drops 2 Estrelas:', value: '1 Troféu Troll (50%), 80-116 Moedas, 20 Pele de troll', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Vida e Dano 0 Estrelas:', value: '600HP, 70 Dano', inline: true },
    { name: 'Vida e Dano 1 Estrelas:', value: '1200HP, 105 Dano', inline: true },
    { name: 'Vida e Dano 2 Estrelas:', value: '1800HP, 140 Dano', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Spawn:', value: 'Em qualquer lugar em Floresta Negra *~Raro*.' },
    { name: 'Resistencias:', value: '\u200B' },
    { name: 'Fraco contra:', value: '*Perfurante*', inline: true },
    { name: 'Imune:', value: '*Espírito*', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'Dicas:', value: 'Acerte a cabeça para obter bônus de Dano.' },
  );

module.exports = {
  id: 'troll',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
