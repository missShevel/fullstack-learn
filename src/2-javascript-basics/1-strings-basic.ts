const anime: string = "Totoro";
console.log(anime.toUpperCase());
console.log(anime.toLowerCase());

const number: number = 1.345231;
console.log(`number = ${number} and type of number: ${typeof(number)}`);

const number2:number = Number(number.toFixed(2));
console.log(`number2 = ${number2} and type of number2: ${typeof(number2)}`);

const shortNumber: number = 1.5;
console.log(`short number = ${shortNumber} and type of short number: ${typeof(shortNumber)}`);

const shortNumber2:number = Number(shortNumber.toFixed(3));
console.log(`short number2 = ${shortNumber2} and type of short number2: ${typeof(shortNumber2)}`);

export {}