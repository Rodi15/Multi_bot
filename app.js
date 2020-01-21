console.log('Инициализация бота...\nПодключение библиотек...');
const Discord = require('discord.js'),
  client = new Discord.Client(),
  Enmap = require("enmap"),
  fs = require("fs");
const Embed = new Discord.RichEmbed()
client.discord = Discord;
client.req = require('request');
client.fs = fs;


console.log(`Библиотеки подключены!\n`);
client.login("NjQyMDA1ODcxNjA5NTExOTM2.XcQr4A.7I1MDP86KpoZB6VJQBo2jDu8wTg");


client.on('message', message => {
    if (message.content === 'Привет') {
    console.log('100900123')
    message.channel.send('Приветствую тебя')
    }
});

client.on('message', message => {
    if (message.content === 'привет') {
    console.log('10090223')
    message.channel.send('Приветствую тебя')
    }
});

client.on('message', message => {
    if (message.content === 'Всем доброго времени суток') {
    console.log('100500123')
    message.channel.send('Приветствую тебя')
    }
});


client.on('message', message => {
    if (message.content === 'всем доброго времени суток') {
    console.log('10050823')
    message.channel.send('Приветствую тебя')
    }
});

client.on('message', message => {
    if (message.content === 'Шалом') {
    console.log('10050823')
    message.channel.send('Приветствую тебя')
    }
});



/*client.on('ready', () => {

  var testChannel = client.channels.find(channel => channel.id === '661273224969191444');

  console.log("The bot podkluchen");
  
  setInterval(() => {
    testChannel.send("Hello");
  }, 1000);
  //Формула: Умножьте значение "время" на 3600
});*/

console.log("Загрузка:")

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  let counter = files.length;
  let counteris = 0;
  files.forEach(file => {
    counteris++;
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  if (counter == counteris) console.log('Ивенты....[ок]\n');
});



client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  let counter = files.length;
  let counteris = 0;
  files.forEach(file => {
    counteris++;
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
  if (counter == counteris) console.log('Команды....[ок]\n');
});




