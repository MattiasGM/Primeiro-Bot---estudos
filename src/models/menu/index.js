const path = require('node:path');
const fs = require('node:fs');

module.exports = {
  async execute(interaction, guide) {
    if (interaction.isStringSelectMenu()) {
      const selected = interaction.values[0];
      const guidesPath = path.join(__dirname, '../', '../', 'guides', guide);
      const guidesFiles = fs.readdirSync(guidesPath).filter((file) => file.endsWith('.js'));
      for (const file of guidesFiles) {
        const filePath = path.join(guidesPath, file);
        const guides = require(filePath);
        if (selected === guides.id && 'execute' in guides) {
          guides.execute(interaction);
        } else if (!('execute' in guides)) {
          console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
      }
    }
  },
};
