class Ninja{
    //constructor
    constructor(name,health,speed ,strength){
        this.name = name ; 

        this.health= health ; 

        this.speed = 3;

        this.strength = 3;

    }

    sayName(){
        console.log('the name is:'+this.name);
    }

    showStats(){
        console.log('Name is : '+this.name +' strength: '+ this.strength +' speed: '+ this.speed +' health: '+ this.health);
    }

    drinkSake(){
        this.health +=10;
        console.log('add health to ninja :'+ this.health)
    }



}

// instance 1
console.log('--ninja1--')
const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.drinkSake();
    ninja1.showStats();

// instance 2
    console.log('--ninja2--')
    const ninja2 = new Ninja("ninja2",11,22,33);
        ninja2.sayName();
        ninja2.drinkSake();
        ninja2.showStats();


// instance 3
console.log('--ninja3--')
const ninja3 = new Ninja("ninja3",11);
    ninja3.sayName();
    ninja3.drinkSake();
    ninja3.showStats();
