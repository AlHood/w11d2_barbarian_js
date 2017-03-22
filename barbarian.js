

var barbarian = {
  name: "Maximus",
  weapon: "Disarming good looks",
  health: 100,
  angerLevel: 40,
  favoriteBeer: "Druidh Bogh",
  drink: function(beer) {
if(beer === "Druidh Bogh") {
  health += 10;}else{
    angerLevel += 25;}
  }
}
}




module.exports = barbarian;