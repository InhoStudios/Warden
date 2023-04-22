const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    execute(client, message) {
        console.log(`[${client.guilds.cache.get(message.guildId)}] ${message.author.username}: ${message.content}`)
    }
};