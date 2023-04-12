const {
  SlashCommandBuilder, EmbedBuilder,
} = require('discord.js');

const https = require('https');
const fs = require('fs');
const path = require('path');

const app = async (openai, interaction) => {
  const imageUrlDownload = interaction.options.getString('link');

  const imagePath = path.join(__dirname, '../', '../', 'images', 'imageVariat999999.png');

  https.get(imageUrlDownload, (res) => {
    res.pipe(fs.createWriteStream(imagePath))
      .on('finish', async () => {
        try {
          const response = await openai.createImageVariation(
            fs.createReadStream(imagePath),
            1,
            '1024x1024',
          );

          const imageUrl = response.data.data[0].url;

          const embed = new EmbedBuilder()
            .setColor(0x2986cc)
            .setTitle('Sua variação da Imagem!')
            .setImage(imageUrl);

          await interaction.editReply({
            content: '', embeds: [embed], ephemeral: true,
          });

          fs.unlink(imagePath, (err) => {
            if (err) throw err;
          });
        } catch (error) {
          console.error(error);
          await interaction.editReply({ content: 'Formato de Imagem Inválido! Só aceito imagens no Formato .PNG! Tambem Verifique se ela é quadrada (ex: 500x500 ou 817x817) mesma proporção em todos os lados.', ephemeral: true });
          fs.unlink(imagePath, (err) => {
            if (err) throw err;
          });
        }
      });
  });
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('variante-image-url')
    .setDescription('Consultar o Oráculo')
    .addStringOption((option) => option.setName('link')
      .setDescription('Digite a URL da imagem (FORMATO PNG!), meu Nobre')),

  async execute(interaction, openai) {
    await interaction.deferReply({ ephemeral: true });
    await app(openai, interaction);
  },
};
