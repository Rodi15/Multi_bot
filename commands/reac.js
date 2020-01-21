module.exports.run = (client, msg, args) => {
    if (msg.author.id != '553633091403382794') return msg.channel.send(":x: Команда доступна только для создателя.");
    msg.channel.fetchMessage(args[1]).then(msg => msg.react(args[2]));
}