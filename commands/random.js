exports.run = (client, message, args, functions) => {
    let max = args;
    let random = Math.ceil(Math.random() * max);
    if(random == 0){
      random = 1;
    }
    functions.sendEmbed(message, message.guild.name, message.guild.iconURL, "RANDOM", message.guild.iconURL, [{
        title : '<a:diceroll:633604114206687232> - Lancement du dés !', desc: ` Vous êtes tombé sur ** ${random} ** !`
    }])

  }
  
  exports.help = {
    name: "random",
    desc: "choose randomly a number between 1 - number_max, using : <!random max>"
  }