const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const embeds = [];

class Main {
  constructor(interaction, openai) {
    this.interaction = interaction;
    this.openai = openai;
  }

  async app() {
    const imageDescription = this.interaction.options.getString('image');
    let imageNumber = this.interaction.options.getNumber('number');

    if (imageNumber > 4) imageNumber = 4;

    const response = await this.openai.createImage({
      prompt: imageDescription,
      n: imageNumber,
      size: '1024x1024',
    });

    const images = response.data.data;

    for (const index in images) {
      if (Object.prototype.hasOwnProperty.call(images, index)) {
        const imageUrl = images[index].url;

        const embed = new EmbedBuilder()
          .setColor(0x2986cc)
          .setTitle(`${imageDescription}: ${Number(index) + 1}`)
          .setImage(imageUrl);

        embeds.push(embed);
      }
    }
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gerar-image')
    .setDescription('Consultar o Oráculo')
    .addStringOption((option) => option.setName('image')
      .setDescription('Descreva sua imagem, meu Nobre'))
    .addNumberOption((option) => option.setName('number')
      .setDescription('Quantas imagens deseja gerar? (MÁXIMO 4 IMAGENS), meu Nobre')),

  async execute(interaction, openai) {
    await interaction.deferReply({ ephemeral: true });
    const main = new Main(interaction, openai);
    await main.app();
    await interaction.editReply({ content: '', embeds, ephemeral: true });
  },
};
