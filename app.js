// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }


function createInstructor(firstName, lastName) {
    return {
        firstName, lastName,
    }
}


// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;
let instructor = {
    firstName: "colt",
[favoriteNumber]: "That is my favrite number!"
}

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }


const instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return "HI!"
    },
    sayBye() {
        return this.firstName + "says Bye";
    }
}


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


function createAnimal (species, soundMake, noise) {
    return {
        species,
        [soundMake]() {
            return noise;
        }
    }
}