 // Q1:
 class SuperHero{
   constructor(name, age,filed){
    this.name = name;
    this.age = age; 
   }

   changeAge(){

    this.age +=1;

   }
 }
 var hero1 = new SuperHero("mohammed", 40)
 console.log( hero1)


 //Q2
 class Song{
     constructor(songName, bandName){
        this.songName = songName;
        this.bandName = bandName;
     }
     countName(){
        // debugger
        var words = this.songName.split(' ');
        var lenght =  words.length
        return lenght;  
    }
    createElement(){
        $("body ").append("<h1>partner</h1>")  
        }
    }
 
 var song1 = new Song('terra traa', 'Harmony Band')


class cat {
    constructor(){
        tiredness= 70;
        hunger=90;
        lonliness=50;
        happiness=10;
    }
   feed(){
       this.hunger = 100
       this.happiness =200
       return ""
   }


    }





