const { Client } = require("discord.js");

module.exports = (Client, triggertext, replaytext) => {
    Client.on('message', message => {
        if(message.content.toLowercase() === triggertext.toLowercase()){
            message.author.send(replytext)
        }
    })
}