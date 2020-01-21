module.exports = (client, event) => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){  //проверка
        user_client_data = client.channels.get("642070215919796246").members.get(event.d.user_id) //айди канала
        if (event.d.message_id == "642070748017590305") {   //айди сообщения
            ans = {
                "🍌": "642067934843240483", //емоджи и после точек айди роли "\@роль", как узнать емоджи "\:green_apple:"
                "🍎": "638019987994443776", 
                "🎉": "579688942626930688", 
                "📻": "603977037014892544"
            }
        } else if (event.d.message_id == "564002728926380032") {
            ans = {
            "💣": "563994487072751628", 
            "⚒": "563994484950695936"
            }
        } else {
            return
        }
        if (ans[event.d.emoji.name] == null) return;
        if (user_client_data.user.bot != false) return;

        if (event.t === "MESSAGE_REACTION_ADD"){
            user_client_data.addRole(ans[event.d.emoji.name])
        } else {
            user_client_data.removeRole(ans[event.d.emoji.name]);
        }
    }
};