const path = require('node:path');

const guide = 'crafts';

module.exports = {
  async execute(interaction) {
    if (interaction.isStringSelectMenu()) {
      const modelMenu = path.join(__dirname, '../', '../', 'models', 'menu');
      const menu = require(modelMenu);
      menu.execute(interaction, guide);
    }
  },
};
