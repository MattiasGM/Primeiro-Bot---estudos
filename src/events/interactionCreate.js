const { Events } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

async function buttonsInteraction(interaction, openai) {
  if (interaction.isButton()) {
    const { customId } = interaction;

    const command = interaction.client.commands.get(customId);

    if (!command) {
      console.error(`No command matching ${customId} was found.`);
      return;
    }

    try {
      const isVariant = true;
      const { variantDesc } = require('../commands/utilities/imagine');
      await command.execute(interaction, openai, isVariant, variantDesc);
    } catch (error) {
      console.error(`Error executing ${customId}`);
      console.error(error);
    }
  }
}

async function controllersMenu(interaction) {
  if (interaction.isStringSelectMenu()) {
    const foldersPath = path.join(__dirname, '../', 'controllers');
    const controllersFiles = fs.readdirSync(foldersPath).filter((file) => file.endsWith('.js'));

    for (const file of controllersFiles) {
      const filePath = path.join(foldersPath, file);
      const controllers = require(filePath);
      if ('execute' in controllers) {
        try {
          controllers.execute(interaction);
        } catch (error) {
          console.error(`Error executing ${interaction.commandName}`);
          console.error(error);
        }
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property path interaction.`);
      }
    }
  }
}

async function executeCommands(interaction, openai) {
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction, openai);
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`);
      console.error(error);
    }
  }
}

async function app(interaction, openai) {
  buttonsInteraction(interaction, openai);
  controllersMenu(interaction);
  executeCommands(interaction, openai);
}

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, openai) {
    app(interaction, openai);
  },
};
