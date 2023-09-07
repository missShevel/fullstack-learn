interface Circle {
  radius: number;
  kind: "circle";
}

interface Square {
  sideLength: number;
  kind: "square";
}

type Shape = Circle | Square;

const a: Shape = {
  kind: "circle",
  radius: 4,
} as Shape;

// зроби функцію яка в залежності a це квардрат чи коло робить різні дії

function findArea(figure: Shape) {
  if (figure.kind === "circle") {
    return Math.PI * Math.pow(figure.radius, 2);
  } else {
    return Math.pow(figure.sideLength, 2);
  }
}

console.log(findArea(a));
export {};
