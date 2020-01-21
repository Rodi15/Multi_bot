module.exports.run = (client, msg, args) => {

    const moment = require('moment');  //подключаем библиотеку с помощью функции require
    moment.locale('ru')
    msg.channel.send(`**Точная дата и время:** \`${moment().format('dddd, MMMM DD YYYY, hh:mm:ss')}\``);  // можно и так moment().format('h:mm:ss')
}
//    msg.channel.send(`**Current time:** \`${moment().format('DD/MM/YYYY hh:mm:ss')}\``);  // можно и так moment().format('h:mm:ss')
//now.format('dddd, MMMM DD YYYY, h:mm:ss')