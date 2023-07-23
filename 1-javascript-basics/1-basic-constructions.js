/* Variables*/
let a = 5;
let b = 10;
console.log(`a value ${a}`);
console.log(`b value ${b}`);

b = a
console.log(`now b equals ${b}`);

const c = b
console.log(`c value is always ${c}`);

/* if statements */
let weather = "cold"
if (weather === "cold") {
    console.log("Wear a coat");
} else {
    console.log("Weat a T-shirt");
}

weather = "hot";
const output = (weather === "cold") ? "Wear a coat" : "Wear a T-shirt";
console.log(output);

/* Loops */
const heroes = ["Ladybug", "Cat Noir", "Rena Rouge", "Spiderman", "Iron Man"];
let i = 0;

while (i < heroes.length) {
    console.log(`while -- ${heroes[i]}`);
    i++;
}

for(i = 0; i < heroes.length; i++) {
    console.log(`for i  -- ${heroes[i]}`);
}

for (let hero of heroes) {
    console.log(`for of ${hero}`);
}

const heroesObj = {
    "Ladybug": "Miraculous",
    "Cat Noir": "Miraculous", 
    "Rena Rouge": "Miraculous", 
    "Spiderman": "Marvel", 
    "Iron Man": "Marvel"
};

for (const hero in heroesObj) {
    console.log(`for in ${hero}: ${heroesObj[hero]}`);
}

let value = 10;
const operator = "/";
let value2 = 3;

/* Switch */
switch(operator) {
    case '+':
        console.log(`${value} + ${value2} = ${value + value2}`);
        break;
    case '-':
        console.log(`${value} - ${value2} = ${value - value2}`);
        break;
    case '*':
        console.log(`${value} * ${value2} = ${value * value2}`);
        break;
    case '/':
        console.log(`${value} / ${value2} = ${value / value2}`);
        break;
}
