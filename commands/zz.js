module.exports.run = (client, msg, args) => {
    if (msg.author.id != '324557711092219904' && msg.author.id != '275220577579565057') return msg.channel.send(":x: Команда доступна только для создателя.");
    try{
      let res = eval(args.slice(1).join(" "));
      var auth = "Код выполнен";
      var mes = ":arrow_forward: **`Тип`**: "+ typeof(res) +"\n:diamond_shape_with_a_dot_inside: **`Результат`**: "+ res;
      var clr = '#0038ff';
    } catch (err) {
      var auth = "Код не выполнен";
      var mes = ":arrow_right: **`Ошибка`**: " + err;
      var clr = '#ff0000';
    }
    var embed = new client.discord.RichEmbed()
      .setColor(clr)
      .setAuthor(auth)
      .setDescription(mes)
    msg.channel.send(embed);
}
