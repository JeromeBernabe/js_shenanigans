

console.log("connected");


let myname = "jerome"
let age = 21
let bio = "A passionate software engineer"

console.log(`Hi I am ${myname} and I am ${age}. ${bio}`)

//ternary operator
let age_verified = (age >= 18) ? "adult" : "minor"


//function definition
let formatProfile = (person, age) => {
    return `${person}, ${age}`
}


//javascript object constructor
function profile(id, pname, age, bio, photo) {
    this.pname = pname;
    this.age = age;

}

p1 = new profile("Jerome", 21)
p2 = new profile("Justine", 26)
p3 = new profile("Johann", 16)
p4 = new profile("Rechilda", 49)
p5 = new profile("Bernabe", 54)


//arrays 
const profiles = [p1,p2,p3,p4,p5]

console.log(profiles)