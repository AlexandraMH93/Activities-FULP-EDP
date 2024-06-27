//Iteration 1
// Soldier
console.log('Iteration 1')

class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

//Iteration 2
// Viking
console.log('Iteration 2')

class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health !== 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }
    battleCry(){
        return 'Odin Owns You All!'
    }

}

//Iteration 3
// Saxon
console.log('Iteration 3')

class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health !== 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

const viking1 = new Viking('Tom', 3, 10) 
const saxon1 = new Saxon('Juan', 3, 5)
console.log(viking1.receiveDamage(2))

//Bonus 
// War
console.log('Bonus')

class War{
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking1)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon1)
    }
    vikingAttack(){
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))] 
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]        
        let result = saxonRandom.receiveDamage(vikingRandom.strength) 
        
        if (saxonRandom.health <= 0) this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom), 1)
        
        return result
    }
    saxonAttack(){
        let saxonRandom2 = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]
        let vikingRandom2 = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]  
        let result2 = vikingRandom2.receiveDamage(saxonRandom2.strength)

        if (vikingRandom2.health <= 0) this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom2), 1)
        return result2
    }
    showStatus(){
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day..."
        else return "Vikings and Saxons are still in the thick of battle."
    }
}

const armada = new War()
armada.addViking(new Viking('Pepe', 4, 5))
armada.addSaxon(new Saxon('Cris', 4, 10))
armada.vikingAttack()
console.log(armada.showStatus())