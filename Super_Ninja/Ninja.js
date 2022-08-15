class Ninja{
    //constructor
    constructor(name,health,speed ,strength){
        this.name = name ; 

        this.health= health ; 

       // this.speed = 3;
       this.speed = speed

       // this.strength = 3;

        this.strength = strength ;

    }
    

    sayName(){
        console.log('the name is:'+this.name);
    }

    showStats(){
        console.log('Name is : '+this.name +' strength: '+ this.strength +' speed: '+ this.speed +' health: '+ this.health);
    }

    drinkSake(){
        this.health +=10;
    }



}
class Sensei extends Ninja{
    //constructor
    constructor(name,wisdom){
     super(name,200,10 ,10);
     this.wisdom =10 ;
    }
    speakWisdom(){
     super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();



