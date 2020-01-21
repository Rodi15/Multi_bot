module.exports.run = (client, msg, args) => {

    if (!args[1]) return msg.channel.send("Укажите что выбираете ");
  
    textprediction = ["Выпал **Камень**", "Выпали **Ножницы**", "Выпала **Бумага**", "Выпал **Колодец**"];
  
    msg.channel.send( textprediction[Math.floor(Math.random() * textprediction.length)]);
  }