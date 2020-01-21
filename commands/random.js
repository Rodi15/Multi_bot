module.exports.run = (client, msg, args) => {
    msg.channel.send("Random");
    var Numbs = ["0", "9"]
    rn = Math.random() * (max - min) + min;
    return Numbs[rn];
    
}
