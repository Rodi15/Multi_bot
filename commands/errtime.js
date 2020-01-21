exports.run = (client, msg, args) => {
    var timeInMs = Date.now();
    if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
    msg.channel.send(timeInMs);
    
}