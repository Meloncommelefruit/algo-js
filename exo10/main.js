class Pokemon {
    constructor (name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck 

    }
    islucky(){  // is souvent vrai ou faux
        return Math.floor(Math.random()*100) <= this.luck;
    }
    attackPokemon(pokemon){
        if (this.islucky()){
            let damages = this.attack - pokemon.defense;
            pokemon.hp -= damages;
            console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp!`);
        }else{
            console.log(`${this.name} a raté son attaque!`);
        }
    }
}
let Carapute = new Pokemon('Carapute', 10, 5, 30, 75)
let Bulbizarre = new Pokemon('Bulbizarre', 14, 8, 20, 65)

let percent = 75
let islucky = Math.floor(Math.random()*100) <= percent;    // un chiffre entre 0 et 1 * 100 pour un poucentage 

Carapute.attackPokemon(Bulbizarre);


 //  if (islucky){
  // } else {
      //  console.log('roooooo');
   // }

//mathclass