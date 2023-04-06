const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');

// ...
const imagesPath = path.join(__dirname, '../', '../', 'images');
const thumbValheim = path.join(imagesPath, 'thumbValheim.png');
const imagePath = path.join(imagesPath, 'chicken.png');
const thumb = new AttachmentBuilder(thumbValheim);
const image = new AttachmentBuilder(imagePath);

const exampleEmbed = new EmbedBuilder()
  .setColor(0x00ffff)
  .setTitle('Galinha')
  .setThumbnail('attachment://thumbValheim.png')
  .setAuthor({ name: 'gameMe', url: 'https://pt.gameme.eu/como-obter-galinhas-e-ovos-de-escotilha-valheim/' })
  .setDescription('O essêncial sobre as Galinhas!')
  .setImage('attachment://chicken.png')
  .addFields(
    { name: 'Descrição:', value: '*Se você quer galinhas, primeiro precisa encontrar alguns ovos. Eles são vendidos por Haldor, o comerciante anão que habita na floresta negra. Um ovo custa 1500 moedas, mas como você precisa de duas galinhas para começar a reproduzir, certifique -se de trazer pelo menos 3000 moedas.*' },
    { name: '~OBS~: *Haldor só venderá ovos de galinha depois de derrotar Yagluth.*', value: '\u200B' },
    { name: 'Como eclodir ovos em Valheim:', value: 'Jogar os ovos (1 por 1, ovos não eclodem se estiverem em pack) ao lado de uma fonte de calor (passe a seta no ovo e verifique que esteja dizendo "quente" para que ele ecloda)' },
    { name: 'Tempo para nascer a primeira galinha: ', value: '2 dias no jogo', inline: true },
    { name: 'Tempo para o filhote virar uma galinha adulta:', value: '2 dias no jogo', inline: true },
    { name: 'Como criar galinhas em Valheim:', value: 'Tudo o que é necessário para a criação de frango é pelo menos duas galinhas adultas e muita comida. As galinhas novas aparecerão como ovos novamente, e elas não eclodirão, a menos que as condições de fogueira e teto sejam atendidas. Em outras palavras, se você quiser apenas cultivar ovos, basta tirar o calor.' },
    { name: 'Alimentação das Galinhas:', value: 'Todos os tipos de Sementes.' },
    { name: 'Drops:', value: 'ovos, carne de frango e penas. (~OBS~: matar com faca de açougueiro)' },
  );

module.exports = {
  id: 'chicken',
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed], files: [thumb, image], ephemeral: true });
  },
};
