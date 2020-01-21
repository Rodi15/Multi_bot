console.log('Инициализация ядра...\nПодключение библиотек...');
const Discord = require('discord.js'),

  client = new Discord.Client(),
  Enmap = require("enmap"),
  fs = require("fs");
client.discord = Discord;
client.req = require('request');
client.fs = fs;
console.log(`Библиотеки подключены!\n`);

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
  if (counter == counteris) console.log('Все ивенты загружены!\n');
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
  if (counter == counteris) console.log('Все команды загружены!\n');
});

client.login("NjM1MDY5MDUyNTMxOTAwNDE2.XbRclQ.H1mVDiRz3ke2LKtU_bDsh7HTqHY");
