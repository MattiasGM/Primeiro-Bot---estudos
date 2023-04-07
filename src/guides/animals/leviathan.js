const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'leviathan.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Leviatã')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'Valheim Wiki', url: 'https://valheim.fandom.com/pt-br/wiki/Javali' })
  .setDescription('O essêncial sobre os Leviatãs!')
  .setImage('attachment://leviathan.png')
  .addFields(
    { name: 'Descrição:', value: '*Leviatã é uma criatura Passiva encontrada em Valheim*' },
    { name: 'Localização: *Oceano.*', value: '\u200B' },
    { name: 'Drops:', value: '3-4 Quitina (100%)' },
    { name: 'Mineração:', value: '*Os Leviatãs em si não podem ser mortos, porém, suas Cracas Abissais podem ser mineradas obtendo Quitina*.' },
    { name: 'Estratégia de Mineração:', value: 'Cada uma das Cracas Abissais do Leviatã possui 40 pontos de saúde, e a criatura não terá a chance de ativar seu aviso até uma craca ser inteiramente mineirada. Isso significa que você poderá minerar cada Craca uma ou duas vezes, dependendo do dano de sua Picareta. Uma vez feito isso, você poderá quebrar cada uma de suas Cracas de uma vez e fugir antes do Leviatã submergir de volta ao Oceano. Tente manter sua estamina alta todo o tempo, pois se o Leviatã submergir enquanto você ainda estiver nele, você precisará nadar até seu barco para sobreviver.' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Notas:', value: 'Leviatãs são criaturas oceânicas extremamente grandes e se parecem com "ilhas vivas". Eles não são hostis, porém eles irão mergulhar quando suas Cracas Abissais forem mineradas. Cada craca abissal tem 10% de chance de fazer com que o Leviatã mergulhe, anunciado por um som de uivo. Os jogadores tem aproximadamente 20 segundos antes que o Leviatã mergulhe depois do uivo.' },
  );

module.exports = {
  id: 'leviathan',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
