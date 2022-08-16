class Card{
    constructor(name,cost){
        this.name = name ; 
        this.cost = cost;
    }
   
}








class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost)

        this.power = power ; 

        this.resilience = resilience ;
    }
    attack(){
        this.resilience-=this.power
    }

    

}


class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)

        this.text = text; 

        this.stat = stat ;

        this.magnitude = magnitude;
    }

    play( target ) {
            if( target instanceof Unit ) {
            if(this.stat == 'resilience'){
                target.resilience -= this.magnitude;
            }
            else if (this.stat == 'power'){
                target.power -=this.magnitude;
            }
            
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
        
    

    
}

const RedBeltNinja = new Unit("RedBeltNinja",3,3,4)
const BlackBeltNinja = new Unit("BlackBeltNinja",4,5,4)

const HardAlgorithm	 = new Effect("HardAlgorithm",2,"increase target's resilience by 3" , "resilience" , +3)

const UnhandledPromiseRejection = new Effect ("UnhandledPromiseRejection",1,"reduce target's resilience by 2","resilience", -2)

const PairProgramming= new Effect ("PairProgramming",3,"increase target's power by 2","power",+2)

//Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
UnhandledPromiseRejection.play(RedBeltNinja)
console.log(RedBeltNinja)

//Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
PairProgramming.play(RedBeltNinja)

console.log(RedBeltNinja)
//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
RedBeltNinja.attack(BlackBeltNinja)

console.log(BlackBeltNinja)