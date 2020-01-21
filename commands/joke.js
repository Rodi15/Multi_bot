module.exports.run = (client, msg, args) => {

    //if (!args[1]) return msg.channel.send("А что я должна предсказать?");
  
    textprediction = ["Дорогой, завтрак на столе\n Так положи в тарелку!", "Мальчика на столько часто ставили в угол, что его воспитали пауки.", "Опытный электрик умело и быстро подключится к любому проекту.", "Мальчик попросил у папы спирт - заправить фломастеры. А уже наутро попросил пивка - заправить карандаши."];
  
    msg.channel.send(textprediction[Math.floor(Math.random() * textprediction.length)]);
  }

  //msg.channel.send(":crystal_ball:  " +