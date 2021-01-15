const { Client } = require("discord.js");

module.exports = (Client, replytext) => {
    Client.on('message', message => {
            message.author.send(replytext)
    })
}