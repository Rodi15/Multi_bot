module.exports.run = (client, msg, args) => {
    msg.channel.send("Гугл небыл так близок к провалу", {file: "./images/1.png"})
}

/*...
let cbinded = commandFunction.bind(client)
cbinded(...)
@Rodi забинди клиент во внутрь
commandFunction... эта та exports.run*/
