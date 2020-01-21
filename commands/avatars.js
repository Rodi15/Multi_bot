module.exports.run = (client, msg, args) => {

  if ("619654327317037103" != msg.channel.id && "599618251793891368" != msg.channel.id) {
		msg.delete();
		return msg.channel.send(`:x: <@${msg.author.id}> команды надо писать в <#619654327317037103>`).then(msg => msg.delete(10000));
	}

  usergetavar = msg.mentions.users.first();
  if (!usergetavar) usergetavar = msg.author;
  msg.channel.send(usergetavar.avatarURL);

}
