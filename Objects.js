const car = {
    name : "BMW",
    price :1220
}

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    display : function(){
        return this.firstName+" "+this.lastName+" "+this.age+" "+this.eyeColor
    }
  };


console.log(car.name)
console.log(person.display())
person["Welecome"]="wefwefwe"
console.log(person)