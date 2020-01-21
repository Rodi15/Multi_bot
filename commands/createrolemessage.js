module.exports.run = (client, msg, args) => {
    if (message.content === "listemojis") {
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
      }
};