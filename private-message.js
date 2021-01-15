const { Client } = require("discord.js");

module.exports = (Client, triggertext, replytext) => {
    Client.on('message', message => {
        if(message.content.toLowerCase() === triggertext.toLowerCase()){
            message.author.send(replytext)
        }
    })
}