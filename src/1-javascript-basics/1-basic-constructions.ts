/* Variables*/
let a: number = 5;
let b: number = 10;
console.log(`a value ${a}`);
console.log(`b value ${b}`);

b = a
console.log(`now b equals ${b}`);

const c: number = b
console.log(`c value is always ${c}`);

/* if statements */
let weather: string = "cold"
if (weather === "cold") {
    console.log("Wear a coat");
} else {
    console.log("Weat a T-shirt");
}

weather = "hot";
const output = (weather === "cold") ? "Wear a coat" : "Wear a T-shirt";
console.log(output);

/* Loops */
const heroes: Array<string> = ["Ladybug", "Cat Noir", "Rena Rouge", "Spiderman", "Iron Man"];
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

const heroesObj: Record<string, string> = {
    "Ladybug": "Miraculous",
    "Cat Noir": "Miraculous", 
    "Rena Rouge": "Miraculous", 
    "Spiderman": "Marvel", 
    "Iron Man": "Marvel"
};

for (const hero in heroesObj) {
    console.log(`for in ${hero}: ${heroesObj[hero]}`);
}

type Operator = '/' | '*' | '+' | '-';

let value: number = 10;
let operator: Operator = '/' as Operator;
let value2: number = 3;

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
    default:
        throw new Error();
}

export {}