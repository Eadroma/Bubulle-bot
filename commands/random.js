exports.run = async (client, message, args, functions) => {
    let max = args[0] ? parseInt(args[0]) : 100;
    if (isNaN(max)) max = 100;
    
    let random = Math.ceil(Math.random() * max);
    if(random == 0){
      random = 1;
    }
    const icon = message.guild.iconURL() || "";
    functions.sendEmbed(message, message.guild.name, icon, "Random", icon, [{
        title : '<a:diceroll:633604114206687232> - Lancement du dés !', desc: ` Vous êtes tombé sur ** ${random} ** !`
    }]);
  }
  
  exports.help = {
    name: "random",
    desc: "choose randomly a number between 1 - number_max, using : <!random max>"
  }