function Person(name , age) {
     this.name = name ;
     this.age = age ; 
}
 
function Car (make ,  model) {
     this.make = make   ;
     this.model = model ; 
}

let myCar = new Car("Toyata " , "CAmry ") ; 

 //console.log(myCar) ; 
 
 let myNewCar = new Car("tata" , ) ; 

 //console.log(myNewCar) ;  


 function Tea (type) {
     this.type = type ; 
     
     // define funtion here
     this.describe = function () {
         return `this is cup of ${this.type}` ; 
     }
 }

 let lemonTea = new Tea("lemon tea") ; 

 //console.log(lemonTea.describe()) ; 


 // protoype constructor funtion 

 function Animal (species) {
     this.species = species ;
 }

 Animal.prototype.sound = function() {
    return `${this.species} make a sound` ; 
 }
 
 let dog = new Animal("Dog") ;
 //console.log(dog.sound())  ; 

 function Drink ( name ) {
     if(!new .target  ) {
        throw new Error("Drink must be called with new keyWord") ; 
     }
    this.name = name ; 
 }
  
 let tea = new Drink("tea") ; 
 let coffee = Drink("coffee") ; 


 