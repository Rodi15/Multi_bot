module.exports = (client, msg) => {

    if (msg.author.bot) return;

    //Предложение

    if (msg.channel.id == "554548395469963279") {
        msg.react('👍')
        msg.react('👎')
    }

    var channel_stop_send = ["491282828915638272", "532879166450827264", "415593238947299329", "342040493011763200", "346672977179443210", "500719215473590283", "342040569402359818"]
    if (!msg.member.hasPermission('ADMINISTRATOR')) {
        if (channel_stop_send.includes(msg.channel.id)) {
          if (channel_stop_send.includes(msg.channel.id) || msg.content != "" && msg.attachments.size < 1) {
            msg.delete()
            msg.channel.send(`:x: <@${msg.author.id}> Вы похоже ошиблись чатом!`).then(msg => {msg.delete(20000)})
          }
        }
    }
                        
    if (!msg.content.toLowerCase().startsWith('m!')) return;

  	const args = msg.content.toLowerCase().slice(2).trim().split(/ +/g);
	
  	const cmd = client.commands.get(args[0]);
  	if (!cmd) return;
	
  	cmd.run(client, msg, args);

};
