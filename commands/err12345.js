exports.run = (client, msg, args) => {
    var currentDate = new Date();
    console.log(currentDate);
    msg.channel.send(currentDate);
 }
