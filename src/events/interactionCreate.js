const { Events } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

function controllersMenu(interaction) {
  if (interaction.isStringSelectMenu()) {
    const foldersPath = path.join(__dirname, '../', 'controllers');
    const controllersFolders = fs.readdirSync(foldersPath);

    for (const folders of controllersFolders) {
      const controllersPath = path.join(foldersPath, folders);
      const controllersFiles = fs.readdirSync(controllersPath).filter((file) => file.endsWith('.js'));

      for (const file of controllersFiles) {
        const filePath = path.join(controllersPath, file);
        const controllers = require(filePath);
        if ('execute' in controllers) {
          controllers.execute(interaction);
        } else {
          console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
      }
    }
  }
}

async function executeCommands(interaction) {
  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing ${interaction.commandName}`);
    console.error(error);
  }
}

async function app(interaction) {
  controllersMenu(interaction);
  executeCommands(interaction);
}

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    app(interaction);
  },
};
