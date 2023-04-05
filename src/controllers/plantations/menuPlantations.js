const path = require('node:path');

const guide = 'bosses';

module.exports = {
  async execute(interaction) {
    if (interaction.isStringSelectMenu()) {
      const modelMenu = path.join(__dirname, '../', '../', 'models', 'menu');
      const menu = require(modelMenu);
      menu.execute(interaction, guide);
    }
  },
};
