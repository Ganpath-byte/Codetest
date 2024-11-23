console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

for(let i=1; i<=5; i++ ){
    //block of code
    //line1
    console.log("Hello");
}

let firstName = "Harry Potter";
let lastName = "Potter";

console.log(firstName.length[6]);

console.log(`Hello, ${firstName} ${lastName}`)

//console.log(firstName,toLowerCase,firstName.trim())

console.log(firstName.slice(0,5));

let house = "Gryffindor"

console.log(firstName.concat("",house));

console.log(firstName.replace("potter", "Gryffindor"))

console.log(firstName.charAt(7));

let grades = ['A', 'B', 'B+', 'C+', 'D']

console.log(grades[1]);

grades.push(100);

console.log(grades);

grades.pop();

console.log(grades);

let finalgrade = [100,200]

console.log(finalgrade.concat(grades));

console.log(finalgrade.unshift(100));

grades.shift()

console.log(grades.slice(0,3));

console.log(grades.splice(2,2));

console.log(grades.splice(2,0, 100, 200));

console.log(grades.splice(4,2, 100, 200));

console.log(grades.toString());