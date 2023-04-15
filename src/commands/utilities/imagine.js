const {
  SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder,
} = require('discord.js');

let embeds = [];
let components = [];
let imageDescription = '';
let imageNumber = 1;

class Main {
  constructor(interaction, openai, isVariant, variantDesc) {
    this.interaction = interaction;
    this.openai = openai;
    this.isVariant = isVariant;
    this.variantDesc = variantDesc;
  }

  async app() {
    if (this.isVariant) {
      this.isVariant = false;
    } else {
      imageDescription = this.interaction.options.getString('imaginedesc');
      imageNumber = this.interaction.options.getNumber('number');
    }

    if (imageNumber > 4) imageNumber = 4;
    if (!imageNumber || imageNumber === 0) imageNumber = 1;

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
          .setImage(imageUrl);

        embeds.push(embed);
      }
    }

    const questionButton = new ButtonBuilder()
      .setCustomId('disabled')
      .setLabel('Deseja criar outra(s) imagem(ns)? ')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true);

    const imageVariant = new ButtonBuilder()
      .setCustomId('imagine')
      .setLabel('Gerar')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder()
      .addComponents(questionButton, imageVariant);

    components.push(row);

    await this.interaction.editReply({
      content: '', embeds, components, ephemeral: true,
    });

    embeds = [];
    components = [];
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('Consultar o Oráculo')
    .addStringOption((option) => option.setName('imaginedesc')
      .setDescription('Descreva sua imagem, meu Nobre'))
    .addNumberOption((option) => option.setName('number')
      .setDescription('Quantas imagens deseja gerar? (MÁXIMO 4 IMAGENS), meu Nobre')),

  async execute(interaction, openai, isVariant) {
    await interaction.deferReply({ ephemeral: true });
    const main = new Main(interaction, openai, isVariant);
    await main.app();
  },
};
